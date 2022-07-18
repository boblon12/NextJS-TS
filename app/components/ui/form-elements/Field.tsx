import cn from 'classnames';
import { forwardRef } from 'react';
import { text } from 'stream/consumers';

import styles from './Form.module.scss';
import { IField } from './form.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;
