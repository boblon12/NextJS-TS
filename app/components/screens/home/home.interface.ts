import { IGalleryItem } from '@/components/ui/galery/gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.types';

export interface IHome {
	slides: ISlide[];
	trendingMovies: IGalleryItem[];
	actors: IGalleryItem[];
}
