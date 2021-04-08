import { ChangeEvent } from "react";

export interface ITextProps {
  margin?: string;
  color?: string;
}

export interface IFormProps {
  margin?: string;
}

export interface IFormInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}