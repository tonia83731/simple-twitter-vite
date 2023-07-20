export const OrangeBtn = ({ children, onClick }) => {
  return (
    <button
      className="bg-major text-grayscale-0 rounded-full w-full h-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const OrangeBorderBtn = ({ children, onClick }) => {
  return (
    <button
      className="text-major border border-major rounded-full w-full h-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LinkBtn = ({ children }) => {
  return <button className="text-primary underline">{children}</button>;
};
