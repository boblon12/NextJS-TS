import { GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/catalogs/Catalog';

import { IMovie } from '@/shared/types/movies.types';

import { MovieService } from '@/services/movies/movie.service';

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Trending movies"
			description="Trending movies and series in excellent quality: legal, safe, without ads"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies();

		return {
			props: { movies },
			revalidate: 60,
		};
	
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default TrendingPage;
