import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles}) => {
    return (
        <button styles={styles}>
            {title}
        </button>
    );
}

export default Button;