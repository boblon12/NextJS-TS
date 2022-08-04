import { IActor, IMovie } from '@/shared/types/movies.types';

export interface IActorPage {
	actor: IActor;
	movies: IMovie[];
}
