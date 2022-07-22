import { NextPage } from 'next';
import React from 'react';

import { NextPageAuth } from '@/shared/types/auth.types';

const AdminPage: NextPageAuth = () => {
	return <div>AdminPanel</div>;
};

AdminPage.isOnlyAdmin = true;
export default AdminPage;
