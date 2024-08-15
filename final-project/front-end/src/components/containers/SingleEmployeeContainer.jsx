import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import SingleEmployeeView from '../views/SingleEmployeeView';

function SingleEmployeeContainer() {
  let { employeeId } = useParams(); //get id from URL
  employeeId = parseInt(employeeId); //convert to integer

  //get task from state based on URL parameter
  const employee = useSelector(state =>
    state.employees.find(employee => employee.id === employeeId)
  );

  return <SingleEmployeeView employee={employee}/>
}

export default SingleEmployeeContainer;