import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, style, className }) => {
    return (
        <button style={style} className={className}>
            {title}
        </button>
    );
}

export default Button;