import React from 'react';
import { useParams } from 'react-router-dom';
import EditPage from './editPage';

const Param = () => {
  const id = useParams();
  return <EditPage details={id} />;
};
export default Param;
