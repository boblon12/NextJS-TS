import { FC } from 'react';



import { useAuth } from '@/hooks/useAuth';

import AdminActions from './AdminActions/AdminActions';
import styles from './AdminTable.module.scss';
import { IAdminTableItem } from './admin-table.interface';


const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	const { user } = useAuth();
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			{user?.email !== tableItem.email ? (
				<AdminActions
					removeHandler={() => removeHandler(tableItem._id)}
					editUrl={tableItem.editUrl}
				/>
			) : (
				<AdminActions
					disable={true}
					removeHandler={() => removeHandler(tableItem._id)}
					editUrl={tableItem.editUrl}
				/>
			)}
		</div>
	);
};

export default AdminTableItem;