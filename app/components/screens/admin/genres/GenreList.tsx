import { FC } from 'react';



import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';
import Heading from '@/ui/heading/Heading';

import { Meta } from '@/utils/meta';

import { useGenres } from './useGenres';
const GenreList: FC = () => {
	const {
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
		createAsync,
	} = useGenres();

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				onClick={createAsync}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Slug']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	);
};

export default GenreList;