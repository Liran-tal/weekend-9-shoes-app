import React from 'react';
import { useParams } from 'react-router-dom';
import EditPage from './editPage';

const Param = () => {
  const props = useParams();
  return <EditPage details={props} />;
};
export default Param;
