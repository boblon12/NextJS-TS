import { FC } from 'react';



import { useFavorites } from '@/components/screens/favorites/useFavorites';
import AuthPlaceholder from '@/components/ui/VideoPlayer/AuthPlaceholder/AuthPlaceholder';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';

import { useAuth } from '@/hooks/useAuth';

import MovieList from '../MovieList';

import NotAuthFavorites from './NotAuthFavorites';

const FavoriteMovieList: FC = () => {
	const { isLoading, favoritesMovies } = useFavorites();
	const { user } = useAuth();

	if (!user) return <NotAuthFavorites />;

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : favoritesMovies?.length ? (
		<MovieList
			link="/favorites"
			movies={favoritesMovies?.slice(0, 3) || []}
			title="Favorites"
		/>
	) : (
		<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80">
			No favorite movies yet
		</div>
	);
};

export default FavoriteMovieList;