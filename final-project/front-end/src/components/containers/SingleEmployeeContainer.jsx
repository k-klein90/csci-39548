import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import SingleEmployeeView from '../views/SingleEmployeeView';

function SingleEmployeeContainer() {
  let { userId } = useParams(); //get id from URL
  userId = parseInt(userId); //convert to integer

  //get task from state based on URL parameter
  const user = useSelector(state =>
    state.employees.find(user => user.id === userId)
  );

  return <SingleEmployeeView user={user}/>
}

export default SingleEmployeeContainer;