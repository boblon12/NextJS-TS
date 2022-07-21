import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { getAdminHomeUrl } from '@/configs/url.config';

import MenuItem from '../MenuItem';

import LoggoutButton from './LoggoutButton';

const AuthItems: FC = () => {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LoggoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	);
};

export default AuthItems;
