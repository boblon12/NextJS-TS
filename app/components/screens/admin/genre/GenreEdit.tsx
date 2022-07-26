import { FC } from 'react';
import { useForm } from 'react-hook-form';



import formStyles from '@/components/shared/admin/adminForm.module.scss';
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import Button from '@/components/ui/form-elements/Button';
import Field from '@/components/ui/form-elements/Field';
import SlugField from '@/components/ui/form-elements/SlugField/SlugField';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';



import Heading from '@/ui/heading/Heading';



import { Meta } from '@/utils/meta';
import generateSlug from '@/utils/string/generateSlug';



import { IGenreEditInput } from './genre-edit.interface';
import { useGenreEdit } from './useGenreEdit';


const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useGenreEdit(setValue);

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />

			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Icon is required!',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
						</div>
						<Button>Submit</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default GenreEdit;