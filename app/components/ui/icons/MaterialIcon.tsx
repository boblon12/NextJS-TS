import React, { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIconName } from '@/shared/types/icons.types';

import styles from './Icons.module.scss';

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	return (
		(
			<strong className={styles.icons}>
				<IconComponent />
			</strong>
		) || <MaterialIcons.MdDragIndicator />
	);
};

export default MaterialIcon;
