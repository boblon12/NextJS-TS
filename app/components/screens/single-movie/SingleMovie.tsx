import dynamic from 'next/dynamic';
import { FC } from 'react';

import { IMovie } from '@/shared/types/movies.types';

import { Meta } from '@/utils/meta';

import Banner from '../../ui/Banner/Banner';
import Gallery from '../../ui/galery/Gallery';
import { IGalleryItem } from '../../ui/galery/gallery.interface';
import SubHeading from '../../ui/heading/SubHeading';

import Content from './content/Content';

const DynamicPlayer = dynamic(
	() => import('@/components/ui/VideoPlayer/VideoPlayer'),
	{ ssr: false }
);

const DynamicRateMovie = dynamic(() => import('./rate-movie/RateMovie'), {
	ssr: false,
});

const SingleMovie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
	movie,
	similarMovies,
}) => {
	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				imagePath={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie _id={movie._id} slug={movie.slug} />
		</Meta>
	);
};

export default SingleMovie;
