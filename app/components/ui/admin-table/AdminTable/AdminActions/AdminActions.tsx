import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';



import MaterialIcon from '@/components/ui/icons/MaterialIcon';

import { useAuth } from '@/hooks/useAuth';

import { ITableItem } from '../admin-table.interface';

import styles from './AdminActions.module.scss';


interface IAdminActions {
	editUrl: string;
	removeHandler: () => void;
	disable?: boolean;
	tableItem: ITableItem;
}
const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	disable,
	tableItem,
}) => {
	const { user } = useAuth();
	const { push } = useRouter();
	return (
		<div
			className={cn(styles.actions, {
				[styles.disabled]: disable === true,
			})}
		>
			<button disabled={disable} onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			{user?.email === tableItem?.email ? null : (
				<button disabled={disable} onClick={removeHandler}>
					<MaterialIcon name="MdClose" />
				</button>
			)}
		</div>
	);
};

export default AdminActions;