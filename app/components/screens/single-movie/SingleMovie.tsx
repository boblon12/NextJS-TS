import { FC } from 'react';

import { IMovie } from '@/shared/types/movies.types';

import { Meta } from '@/utils/meta';

import Banner from '../../ui/Banner/Banner';
import Gallery from '../../ui/galery/Gallery';
import { IGalleryItem } from '../../ui/galery/gallery.interface';
import SubHeading from '../../ui/heading/SubHeading';

import Content from './content/Content';

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

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	);
};

export default SingleMovie;
