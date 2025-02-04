import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">{children}</section>;
};

export default Wrapper;
