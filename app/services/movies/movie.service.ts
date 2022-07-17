import { axiosClassic } from 'api/interseptors';

import { IMovie } from '@/shared/types/movies.types';

import { getMoviesUrl } from '@/configs/api.config';

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		);

		return movies;
	},
};
