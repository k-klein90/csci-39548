import SingleEmployeeView from '../views/SingleEmployeeView';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {deleteEmployee} from "../../store/employeesSlice.js";

function SingleEmployeeContainer() {
  const dispatch = useDispatch();

  let { employeeId } = useParams(); //get id from URL
  employeeId = parseInt(employeeId); //convert to integer

  //get employee from state based on URL parameter
  const employee = useSelector(state =>
    state.employees.find(employee => employee.id === employeeId)
  );

  const deleteDispatch = (employeeId) => dispatch(deleteEmployee(employeeId));

  return <SingleEmployeeView employee={employee} deleteEmployee={deleteDispatch}/>
}

export default SingleEmployeeContainer;