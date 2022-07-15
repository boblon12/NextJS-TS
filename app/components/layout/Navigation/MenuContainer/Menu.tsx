import { map } from 'lodash';
import React, { FC } from 'react';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import AuthItems from './auth/AuthItems';
import { IMenu } from './menu.types';

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{title === 'General' ? <AuthItems /> : null}
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</div>
	);
};

export default Menu;
