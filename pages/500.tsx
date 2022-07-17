import Heading from '@/components/ui/heading/Heading';

import { Meta } from '@/utils/meta';

export default function Error500() {
	return (
		<Meta title="Page Not Found">
			<Heading title="500 -  Server-side error occured" />
		</Meta>
	);
}
