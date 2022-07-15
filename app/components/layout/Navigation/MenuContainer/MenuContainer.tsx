import React, { FC } from 'react';

import Menu from './Menu';
import GenreMenu from './genres/GenreMenu';
import { menus } from './menu.data';

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={menus[0]} />
			<GenreMenu />
			<Menu menu={menus[1]} />
		</div>
	);
};

export default MenuContainer;
