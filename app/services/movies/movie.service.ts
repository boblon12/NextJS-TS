import axios, { axiosClassic } from 'api/interseptors';



import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface';



import { IMovie } from '@/shared/types/movies.types';

import { getMoviesUrl } from '@/configs/api.config';

export const MovieService = {
	// async getBySlug(slug: string) {
	// 	return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`));
	// },

	async create() {
		return axios.post<string>(getMoviesUrl(''));
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.post(getMoviesUrl('/update-count-opened'), {
			slug,
		});
	},

	async update(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), {
			...data,
			isSendTelegram: true,
		});
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`));
	},

	async delete(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`));
	},

	async getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async getById(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`));
	},

	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`));
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		});
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		);

		return movies;
	},
};