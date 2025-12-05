// components/Heading.jsx

const Heading = ({ children, className = "" }) => {
  return <h1 className={`text-4xl sm:text-5xl leading-snug font-bold ${className}`}>{children}</h1>;
};

export default Heading;
