// components/Heading.jsx

const Heading = ({ children, className = "" }) => {
  return <h1 className={`text-4xl sm:text-5xl tracking-wide leading-16 font-semibold ${className}`}>{children}</h1>;
};

export default Heading;
