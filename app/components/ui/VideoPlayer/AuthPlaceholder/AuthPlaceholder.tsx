import { FC } from 'react';

import AuthButton from './AuthButton';
import styles from './AuthPlaceholder.module.scss';

const AuthPlaceholder: FC<{ slug: string; text?: string }> = ({
	slug,
	text,
}) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>{text ? text : 'You must be logged to start watching'}</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	);
};

export default AuthPlaceholder;
