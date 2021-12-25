import React from 'react';
import { useParams } from 'react-router-dom';
import EditPage from './editPage';

const Param = () => {
  const id = useParams();
  try {
		const item = await Api.getData(id);
    return <EditPage details={id} />;
	} catch (error) {
		console.log(error);
	}
};
export default Param;
