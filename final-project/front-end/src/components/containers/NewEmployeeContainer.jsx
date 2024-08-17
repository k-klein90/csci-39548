import NewEmployeeView from "../views/NewEmployeeView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addEmployee } from "../../store/employeesSlice";
import { fetchEmployees } from "../../store/employeesSlice";

function NewEmployeeContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchEmployees());
    //   }, [dispatch]);

    const handleSubmit = (e) => {
        // Prevent server submission
        e.preventDefault();

        // Get data from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Create the employee object and dispatch the `addEmployee` thunk
        const newEmployee = {
          firstname: formJson.firstName,
          lastname: formJson.lastName,
          department: formJson.department
        };

        dispatch(addEmployee(newEmployee));
        
        // Reset the form so another task can be added
        e.currentTarget.reset();
      }

    return (
        <NewEmployeeView handleSubmit={handleSubmit} employees={employees}/>
    );

}

export default NewEmployeeContainer;