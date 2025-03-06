const Button = ({ text, onClick, className, isValid = true }) => {
    return (
        <button
            onClick={onClick}
            className={`mb-[18px] w-full h-[48px] px-6 py-3 font-bold rounded-xl text-center ${className}`}
            disabled={!isValid}
        >
            {text}
        </button>
    );
  };
  
  export default Button;
  