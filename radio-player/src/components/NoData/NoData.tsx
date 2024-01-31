import React from 'react';

const NoDataFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src="/no_data.png"
        alt="No station Found"
        className="w-[100px] h-[100px] mb-4"
      />
      <p className="text-gray-600">Oops! No stations found.</p>
    </div>
  );
};

export default NoDataFound;
