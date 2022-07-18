import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import AuthFields from '@/components/shared/user/AuthFields';
import Button from '@/components/ui/form-elements/Button';
import Heading from '@/components/ui/heading/Heading';

import { useAuth } from '@/hooks/useAuth';

import { Meta } from '@/utils/meta';

import styles from './Auth.module.scss';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const login = (data: any) => {
		console.table({ data });
	};
	const register = (data: any) => {
		console.table({ data });
	};

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);

		reset();
	};
	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields register={registerInput} formState={formState} />
					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
