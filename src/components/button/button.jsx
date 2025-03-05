const Button = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`mb-[18px] w-full h-[48px] px-6 py-3 text-white font-semibold rounded-2xl text-center ${className}`}
        >
            {text}
        </button>
    );
  };
  
  export default Button;
  