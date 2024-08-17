import './styles/all-objects-view.css';

import { Link } from "react-router-dom";

function AllEmployeesView({employees, editEmployee, deleteEmployee}) {

  if (!employees.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <Link to={`/employees/new`}><button>Add Employee</button></Link>
        <div>There are no employees.</div>
      </>
    );
  }
  return (
    <div id="bgview">
      <Link to={`/`}><button>Back to Home</button></Link>
      <Link to={`/employees/new`}><button>Add Employee</button></Link>
      <div id="ulStyle">
        {employees.map((employee, idx) => {
          return (
            <div key={employee.id} id="liStyle">
              <h4>Employee #{idx+1}: <Link to={`/employees/${employee.id}`}>{employee.firstname} {employee.lastname}</Link></h4>
              <Link to={`/employees/${employee.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </div>
          );
        })}
    </div>
</div>
);

}

export default AllEmployeesView;