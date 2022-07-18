import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string;
	error?: FieldErrors | undefined;
}

type InputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends InputPropsField {}
