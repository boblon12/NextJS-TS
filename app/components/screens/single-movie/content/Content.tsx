import parse from 'html-react-parser';
import { FC } from 'react';



import MaterialIcon from '@/components/ui/icons/MaterialIcon';



import { useAuth } from '@/hooks/useAuth';



import { IMovie } from '@/shared/types/movies.types';



import { getActorUrl, getGenreUrl } from '@/configs/url.config';



import FavoriteButton from '../FavoriteButton/FavoriteButton';



import styles from './Content.module.scss';
import ContentList from './content-list/ContentList';


const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth();
	return (
		<div className={styles.content}>
			{user && <FavoriteButton movieId={movie._id} />}
			<h1>{movie.title}</h1>
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
			<div className={styles.details}>
				<span>{movie.parameters.year} · </span>
				<span>{movie.parameters.country} · </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.map((g) => ({
					link: getGenreUrl(g.slug),
					title: g.name,
					_id: g._id,
				}))}
			/>
			<ContentList
				name="Actors"
				links={movie.actors.map((a) => ({
					link: getActorUrl(a.slug),
					title: a.name,
					_id: a._id,
				}))}
			/>
			{movie.description && (
				<div className={styles.description}>
					{parse(movie.description.slice(0, 350))}
				</div>
			)}
		</div>
	);
};

export default Content;