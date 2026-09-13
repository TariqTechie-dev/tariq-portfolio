const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full bg-slate-950 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;