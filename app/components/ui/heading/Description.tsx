import cn from 'classnames';
import classNames from 'classnames';
import parse from 'html-react-parser';
import { FC } from 'react';

const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return (
		<div className={cn(className, 'font-light text-gray-500 font-opacity-80')}>
			<p>{parse(text)}</p>
		</div>
	);
};

export default Description;
