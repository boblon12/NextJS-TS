import type { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '../app/assets/styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<MainProvider>
			<Component {...pageProps} />;
		</MainProvider>
	);
};

export default MyApp;
