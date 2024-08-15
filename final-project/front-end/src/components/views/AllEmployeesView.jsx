import { Link } from "react-router-dom";

function AllEmployeesView({employees, deleteEmployee}) {

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
    <div id="bgview" style={{display: "flex", flexDirection: "column", padding: "8px", minWidth: "500px"}} >
      <Link to={`/`}><button style={{margin: "8px"}}>Back to Home</button></Link>
      <Link to={`/tasks/new`}><button style={{margin: "8px"}}>Add Task</button></Link>
      <div style={ulStyle}>
        {employees.map((employee, idx) => {
          let styleBool = idx === employees.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={employee.id} style={styleBool}>
              <h4>Employee #{idx+1}: <Link to={`/employees/${employee.id}`}>{employee.firstname}</Link></h4>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </div>
          );
        })}
    </div>
</div>
);

}

export default AllEmployeesView;