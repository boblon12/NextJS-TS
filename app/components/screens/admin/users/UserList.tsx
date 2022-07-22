import { FC } from 'react';

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import Heading from '@/components/ui/heading/Heading';

import { Meta } from '../../../../utils/meta/Meta';

const UserList: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Users List" />
		</Meta>
	);
};

export default UserList;
