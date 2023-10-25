const IconButton = ({ srText, classes, children }) => {
  return (
    <button type="button" className={`-m-2.5 p-2.5 text-gray-400 ${classes}`}>
      <span className="sr-only">{srText}</span>
      {children}
    </button>
  );
};

export default IconButton;
