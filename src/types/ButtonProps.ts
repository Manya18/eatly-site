export interface ButtonProps { 
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    style?: string;
}