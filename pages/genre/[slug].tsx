import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/catalogs/Catalog';

import { IGenre, IMovie } from '@/shared/types/movies.types';

import { GenreService } from '@/services/genres/genre.service';
import { MovieService } from '@/services/movies/movie.service';

interface IGenrePage {
	movies: IMovie[];
	genre: IGenre;
}

const GenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
	return (
		<Catalog
			movies={movies || []}
			title={genre.name}
			description={genre.description}
		/>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll();
		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}));

		return {
			paths,
			fallback: 'blocking',
		};
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug));

		const { data: movies } = await MovieService.getByGenres([genre._id]);

		return {
			props: { movies, genre },
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
