import { FC } from 'react';



import { useAuth } from '@/hooks/useAuth';



import AdminActions from './AdminActions/AdminActions';
import styles from './AdminTable.module.scss';
import { IAdminTableItem } from './admin-table.interface';

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions
				removeHandler={() => removeHandler(tableItem._id)}
				editUrl={tableItem.editUrl}
				tableItem={tableItem}
			/>
		</div>
	);
};

export default AdminTableItem;