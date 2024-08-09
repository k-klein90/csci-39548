import AllEmployeesView from "../views/AllEmployeesView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../../store/employeesSlice";

function AllEmployeesContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    const deleteDispatch = (userId) => dispatch(deleteEmployee(userId));

    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);
    
    return (
       <AllEmployeesView employees={employees} deleteEmployee={deleteDispatch} />
    );

}

export default AllEmployeesContainer;