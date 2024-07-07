import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center  z-50">
      <PropagateLoader color="#36D7B7" loading={loading} size={15} />
    </div>
  );
};

export default Loader;
