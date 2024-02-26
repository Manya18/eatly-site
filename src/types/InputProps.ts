import { ReactElement } from "react";

export interface InputProps {
    name: string,
    value: string,
    placeholder: string,
    label: ReactElement,
    onChange: (e: any) => void,
}