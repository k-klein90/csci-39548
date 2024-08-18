import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { editEmployee } from '../../store/employeesSlice';
import EditEmployeeView from  '../views/EditEmployeeView';

function EditEmployeeContainer() {
  let { employeeId } = useParams(); //get id from URL
  employeeId = parseInt(employeeId); //convert to integer

  const dispatch = useDispatch();

  //get employee from state based on URL parameter
  const employee = useSelector(state =>
    state.employees.find(employee => employee.id === employeeId)
  );

  const handleSubmit = (e) => {
    // Prevent server submission
    e.preventDefault();

    // Get data from form
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Create the employee object and dispatch the `addEmployee` thunk
    const updates = {
      ...employee,
      firstname: formJson.firstName,
      lastname: formJson.lastName,
      department: formJson.department
    };

    dispatch(editEmployee(updates));

    alert("Employee updated!");

  }

  return <EditEmployeeView employee={employee} handleSubmit={handleSubmit}/>
}

export default EditEmployeeContainer;