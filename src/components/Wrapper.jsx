const Wrapper = ({ children, className }) => {
    return (
        <div className={`mx-auto w-full max-w-lg h-screen flex flex-col px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] ${className}`}>
            <div className="flex-1 relative">{children}</div>
        </div>
    );
  };
  
  export default Wrapper;
  
  