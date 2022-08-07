import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { MovieService } from '@/services/movies/movie.service';

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update counts movie oppened', () =>
		MovieService.updateCountOpened(slug)
	);

	useEffect(() => {
		mutateAsync();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
