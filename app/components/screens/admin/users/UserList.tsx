import { FC } from 'react';



import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable';
import Heading from '@/components/ui/heading/Heading';



import { Meta } from '../../../../utils/meta/Meta';



import { useUsers } from './useUsers';

const UserList: FC = () => {
	const { handleSearch, deleteAsync, searchTerm, data, isLoading } = useUsers();
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Users List" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				removeHandler={deleteAsync}
				tableItems={data || []}
				isLoading={isLoading}
				headerItems={['Email', 'Register at']}
			/>
		</Meta>
	);
};

export default UserList;