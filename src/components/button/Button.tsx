import "./Button.scss";

interface ButtonProps {
    children: any;
    outline?: boolean;
    rounded?: boolean;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { children, outline = false, rounded = false, onClick } = props;

    return ( 
        <button 
            className={`btn ${outline ? "outline" : ""} ${rounded ? "rounded" : ""}`}
            onClick={ onClick ? onClick : undefined }
        >
            { children }
        </button>
    )
}

export default Button
