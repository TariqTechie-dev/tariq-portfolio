const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full bg-slate-950 text-slate-50 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;