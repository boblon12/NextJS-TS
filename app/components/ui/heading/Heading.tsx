import { FC } from 'react';

interface IHeeadding {
	title: string;
	className?: string;
}

const Heading: FC<IHeeadding> = ({ title, className }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	);
};

export default Heading;
