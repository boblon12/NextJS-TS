import { FC } from 'react';

import Heading from '@/components/ui/heading/Heading';
import Slider from '@/components/ui/slider/Slider';

import { Meta } from '../../../utils/meta/Meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = ({ slides }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch FAER CINEMA movies on TV or in your browser"
		>
			<Heading title="Watch movies online" className="mb-8 text-2xl" />
			{slides.length && <Slider slides={slides} />}
		</Meta>
	);
};

export default Home;
