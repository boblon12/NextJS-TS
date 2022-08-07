import { GetStaticProps, NextPage } from 'next';

import Collections from '@/screens/collections/Collections';
import { ICollection } from '@/screens/collections/collections.types';

import { GenreService } from '@/services/genres/genre.service';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	const newCollections: any = collections.map((i) => ({
		...i,
		image: i?.image?.split("bigPoster: '")[1]?.split("',\n")[0],
	}));
	return <Collections collections={newCollections || []} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections();

		return {
			props: { collections },
			revalidate: 60,
		};
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		};
	}
};

export default GenresPage;
