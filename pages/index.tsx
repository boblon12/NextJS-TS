import { errorCatch } from 'api/api.helpers';
import type { GetStaticProps, NextPage } from 'next';



import Home from '@/components/screens/home/Home';
import { ISlide } from '@/components/ui/slider/slider.types';



import { ActorService } from '@/services/actor/actor.service';
import { MovieService } from '@/services/movies/movie.service';



import { getGenresList } from '@/utils/movie/GetGenresList';

import { getActorUrl, getMovieUrl } from '@/configs/url.config';

import { IHome } from '../app/components/screens/home/home.interface';
import { IGalleryItem } from '../app/components/ui/galery/gallery.interface';

const HomePage: NextPage<IHome> = (props) => {
	return (
		<div>
			<Home {...props} />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getMovies();

		const slides: ISlide[] = movies.slice(0, 5).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}));

		const { data: dataActors } = await ActorService.getAll();
		const actors: IGalleryItem[] = dataActors.slice(0, 12).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `${a.countMovies} movies`,
			},
		}));

		const dataTrendingMovies = await MovieService.getMostPopularMovies();
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 12)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}));

		return {
			props: {
				slides,
				trendingMovies,
				actors,
			} as IHome,
		};
	} catch (error) {
		console.log(errorCatch(error));

		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			} as IHome,
		};
	}
};

export default HomePage;