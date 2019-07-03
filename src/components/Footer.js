import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <p className="text-xs font-semibold">
          Built with{' '}
          <a
            className="text-teal-500 hover:text-teal-600 hover:underline"
            href="https://reactjs.org"
          >
            React JS
          </a>{' '}
          and{' '}
          <a
            className="text-teal-500 hover:text-teal-600 hover:underline"
            href="https://tailwindcss.com"
          >
            Tailwind CSS
          </a>
        </p>
        <p className="text-xs font-semibold">
          View this project on{' '}
          <a
            className="text-teal-500 hover:text-teal-600 hover:underline"
            href="https://github.com/GeoffSelby/react-face-recognition"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
