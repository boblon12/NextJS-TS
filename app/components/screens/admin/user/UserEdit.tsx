import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import AuthFields from '@/components/shared/user/AuthFields';
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import Button from '@/components/ui/form-elements/Button';
import Heading from '@/components/ui/heading/Heading';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';

import { Meta } from '@/utils/meta';

import { useUserEdit } from './useUserEdit';
import { IUserEditInput } from './user-edit.interface';

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, control, setValue } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit } = useUserEdit(setValue);

	return (
		<Meta title="Edit User">
			<AdminNavigation />
			<Heading title="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields
							formState={formState}
							register={register}
							isPasswordRequired={false}
						/>
						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault();
										field.onChange(!field.value);
									}}
									className={
										'text-link text-white transition-colors block mb-7 text-2lg'
									}
								>
									{field.value ? 'Make it regular user' : 'Make it admin'}
								</button>
							)}
						/>
						<div className={'flex items-start'}>
							<h3
								className={
									'text-white transition-colors block mb-7 text-2lg mr-6'
								}
							>
								Register at{' '}
							</h3>
							<Controller
								control={control}
								name="createdAt"
								render={({ field }) => (
									<h3 className={'text-white text-2lg'}>{field.value}</h3>
								)}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default UserEdit;
