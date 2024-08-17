import AllEmployeesView from "../views/AllEmployeesView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, editEmployee, deleteEmployee } from "../../store/employeesSlice";

function AllEmployeesContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    const editDispatch = (employeeId) => dispatch(editEmployee(employeeId));
    const deleteDispatch = (employeeId) => dispatch(deleteEmployee(employeeId));

    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);
    
    return (
       <AllEmployeesView employees={employees} editEmployee={editDispatch} deleteEmployee={deleteDispatch} />
    );

}

export default AllEmployeesContainer;