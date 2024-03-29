import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user/user.service';

import { toastError } from '@/utils/api/withToastErrorRedux';
import { convertMongoDate } from '@/utils/date/convertDate';

import { getAdminUrl } from '@/configs/url.config';

import { IUserEditInput } from './user-edit.interface';

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query, push } = useRouter();
	const userId = String(query.id);

	const { isLoading } = useQuery(
		['get edit user', userId],
		() => UserService.getById(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email);
				setValue('isAdmin', data.isAdmin);
				setValue('createdAt', convertMongoDate(data.createdAt));
			},
			onError(error) {
				toastError(error, 'Get user');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IUserEditInput) => UserService.updateUser(userId, data),
		{
			onError(error) {
				toastError(error, 'Update user');
			},
			onSuccess() {
				toastr.success('Update user', 'update was successful');
				push(getAdminUrl('users'));
			},
		}
	);

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) =>
		await mutateAsync(data);

	return { isLoading, onSubmit };
};
