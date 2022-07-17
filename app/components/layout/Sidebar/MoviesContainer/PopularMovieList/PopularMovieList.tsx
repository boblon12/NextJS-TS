import { FC } from 'react';
import { useQuery } from 'react-query';

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';

import { MovieService } from '@/services/movies/movie.service';

import MovieList from '../MovieList';

const PopularMovieList: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Most popular movie in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3),
		}
	);

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			title="Popular Movies"
			link="/trending"
			movies={popularMovies || []}
		/>
	);
};
export default PopularMovieList;
