import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Actor from '@/components/screens/actor/Actor';

import { IActor, IMovie } from '@/shared/types/movies.types';

import { ActorService } from '@/services/actor/actor.service';
import { MovieService } from '@/services/movies/movie.service';

import Error404 from '../404';

interface IGenrePage {
	movies: IMovie[];
	actor: IActor;
}

const GenrePage: NextPage<IGenrePage> = ({ movies, actor }) => {
	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await ActorService.getAll();
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
		const { data: actor } = await ActorService.getBySlug(String(params?.slug));

		const { data: movies } = await MovieService.getByActor(actor._id);

		return {
			props: { movies, actor },
			revalidate: 60,
		};
	} catch (e) {
		return {
			props: {},
		};
	}
};

export default GenrePage;
