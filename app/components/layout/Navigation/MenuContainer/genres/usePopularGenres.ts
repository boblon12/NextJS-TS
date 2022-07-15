import { useQuery } from 'react-query';

import { getGenresUrl } from '@/configs/api.config';

import { GenreService } from '../../../../../services/genres/genre.service';
import { IMenuItem } from '../menu.types';

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem =>
							({
								icon: genre.icon,
								link: getGenresUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
			onError(error) {
				console.log(error, 'Popular genres menu');
			},
		}
	);

	return queryData;
};
