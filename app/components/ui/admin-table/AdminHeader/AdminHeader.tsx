import { ChangeEvent, FC } from 'react';

import SearchField from '../../search-field/SearchField';
import AdminCreateButton from '../AdminCreateButton/AdminCreateButton';

import styles from './AdminHeader.module.scss';

interface IAdminHeader {
	onClick?: () => void;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	searchTerm: string;
}
const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	);
};

export default AdminHeader;
