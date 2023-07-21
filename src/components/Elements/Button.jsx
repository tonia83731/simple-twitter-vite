export const OrangeBtn = ({ children, onClick }) => {
  return (
    <button
      className="bg-major text-grayscale-0 rounded-full w-full h-full py-[8px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const OrangeBorderBtn = ({ children, onClick }) => {
  return (
    <button
      className="text-major border border-major bg-grayscale-0 rounded-full w-full h-full py-[8px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LinkBtn = ({ children }) => {
  return <button className="text-primary underline">{children}</button>;
};
