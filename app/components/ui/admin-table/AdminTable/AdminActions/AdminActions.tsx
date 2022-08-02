import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';

import MaterialIcon from '@/components/ui/icons/MaterialIcon';

import styles from './AdminActions.module.scss';

interface IAdminActions {
	editUrl: string;
	removeHandler: () => void;
	disable?: boolean;
}
const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	disable,
}) => {
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
			<button disabled={disable} onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	);
};

export default AdminActions;
