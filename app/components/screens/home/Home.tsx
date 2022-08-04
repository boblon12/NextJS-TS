import { FC } from 'react';



import Gallery from '@/components/ui/galery/Gallery';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/heading/SubHeading';
import Slider from '@/components/ui/slider/Slider';

import { Meta } from '../../../utils/meta/Meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch FAER CINEMA movies on TV or in your browser"
		>
			<Heading title="Watch movies online" className="mb-8 text-2xl" />
			{slides.length && <Slider slides={slides} />}

			<div className={'my-10'}>
				<SubHeading title="Trending Movies" />
				<Gallery items={trendingMovies} />
			</div>

			<div className={'my-10'}>
				<SubHeading title="Best Actors" />
				<Gallery items={actors} />
			</div>
		</Meta>
	);
};

export default Home;