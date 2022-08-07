import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import SingleMovie from '@/components/screens/single-movie/SingleMovie';
import Catalog from '@/components/ui/catalogs/Catalog';
import { IGalleryItem } from '@/components/ui/galery/gallery.interface';

import { IMovie } from '@/shared/types/movies.types';

import { MovieService } from '@/services/movies/movie.service';

import { getMovieUrl } from '@/configs/url.config';

import Error404 from '../404';

const MoviePage: NextPage<{
	movie: undefined | IMovie;
	similarMovies: IGalleryItem[];
}> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies} />
	) : (
		<Error404 />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getMovies();
		const paths = movies.map((g) => ({
			params: { slug: g.slug },
		}));

		return {
			paths,
			fallback: 'blocking',
		};
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug));

		const responseSimilarMovies = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		);

		const similarMovies: IGalleryItem[] = responseSimilarMovies.data
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}));

		return {
			props: { movie, similarMovies },
			revalidate: 60,
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default MoviePage;
