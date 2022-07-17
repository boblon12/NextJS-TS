import { FC } from 'react';

import Heading from '@/components/ui/heading/Heading';

import { Meta } from '../../../utils/meta/Meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch FAER CINEMA movies on TV or in your browser"
		>
			<Heading title="Watch movies online" className="mb-8 text-2xl" />
		</Meta>
	);
};

export default Home;
