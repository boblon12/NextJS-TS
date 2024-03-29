import axios from 'api/interseptors';
import { axiosClassic } from 'api/interseptors';



import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface';
import { ICollection } from '@/components/screens/collections/collections.types';



import { IGenre } from '@/shared/types/movies.types';

import { getGenresUrl } from '@/configs/api.config';


export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

		async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	},

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`));
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	
	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`));
	},

	async create() {
		return axios.post<string>(getGenresUrl(''))
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data);
	},
};