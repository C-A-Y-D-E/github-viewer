const MenuItem = ({ title, children }) => {
  return (
    <li>
      <div className="flex items-center gap-4 text-xl cursor-not-allowed py-2 line-through">
        {children}
        <p>{title}</p>
      </div>
    </li>
  );
};

export default MenuItem;
