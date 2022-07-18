import React, { FC } from 'react';

import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<div className={styles.footer}>Made with ❤️ by <a  target='_blank' rel='noreferrer' href='https://telegram.me/faershtein1337'> Faershtein Daniil</a></div>
			<Sidebar />

		</div>
	);
};

export default Layout;
