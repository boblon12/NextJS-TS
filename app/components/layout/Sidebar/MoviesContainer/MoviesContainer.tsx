import dynamic from 'next/dynamic';
import { FC } from 'react';

import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList';
import PopularMovieList from './PopularMovieList/PopularMovieList';

const DynamicFavoriteList = dynamic(
	() => import('./FavoriteMovieList/FavoriteMovieList'),
	{
		ssr: false,
	}
);

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			<DynamicFavoriteList />
		</div>
	);
};

export default MoviesContainer;
