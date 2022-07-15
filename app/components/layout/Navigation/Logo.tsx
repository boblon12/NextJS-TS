import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import logoImage from '@/assets/images/faerlogo.png';

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="mb-10 block px-2">
				<Image
					src={logoImage}
					layout="responsive"
					alt="Movie app"
					draggable={false}
				/>
			</a>
		</Link>
	);
};

export default Logo;
