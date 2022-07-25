import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { GenreService } from '@/services/genres/genre.service';

import { toastError } from '@/utils/api/withToastErrorRedux';
import { getKeys } from '@/utils/object/getKeys';

import { getAdminUrl } from '@/configs/url.config';

import { IGenreEditInput } from './genre-edit.interface';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { query, push } = useRouter();
	const genreId = String(query.id);

	const { isLoading } = useQuery(
		['get edit genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError(error) {
				toastError(error, 'Get genre');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onError(error) {
				toastError(error, 'Update genre');
			},
			onSuccess() {
				toastr.success('Update genre', 'update was successful');
				push(getAdminUrl('genres'));
			},
		}
	);

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) =>
		await mutateAsync(data);

	return { isLoading, onSubmit };
};
