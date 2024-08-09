import {Link} from "react-router-dom";

function AllEmployeesView({employees, deleteEmployee}) {

  if (!employees.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <div>There are no employees.</div>
      </>
    );
  }
  return (
    <div id="bgview" style={{display: "flex", flexDirection: "column", paddingBottom: "16px"}} >
      <Link to={`/`}><button style={{margin: "8px"}}>Back to Home</button></Link>
      <div style={ulStyle}>
        {employees.map((user, idx) => {
          let styleBool = idx === tasks.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={user.id} style={styleBool}>
              <h4>Employee #{idx + 1}: <Link to={`/employees/${user.id}`}>{user.firstname}</Link></h4>
              <button onClick={() => deleteEmployee(user.id)}>Delete</button>
            </div>
          );
        })}
    </div>
</div>
);

}

export default AllEmployeesView;