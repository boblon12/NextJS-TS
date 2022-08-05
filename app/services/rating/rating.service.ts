import axios from 'api/interseptors';

import { getRatingsUrl } from '@/configs/api.config';

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axios.post<string>(getRatingsUrl('/set-rating'), {
			movieId,
			value,
		});
	},

	async getRatingByUserMovie(movieId: string) {
		return axios.get<number>(getRatingsUrl(`/${movieId}`));
	},
};
