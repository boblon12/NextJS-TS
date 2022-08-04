import UserEdit from '@/components/screens/admin/user/UserEdit';

import { NextPageAuth } from '@/shared/types/auth.types';

const MovieEditPage: NextPageAuth = () => {
	return <UserEdit />;
};

MovieEditPage.isOnlyAdmin = true;

export default MovieEditPage;
