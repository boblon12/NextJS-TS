import axios from 'api/interseptors';
import { axiosClassic } from 'api/interseptors';

import { IActor } from '@/shared/types/movies.types';

import { getActorsUrl } from '@/configs/api.config';

export const ActorService = {
	async delete(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`));
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
};
