import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function SingleEmployeeView({employee, deleteEmployee}) {
  if (!employee) {
    return (
      <div>
        <Link to="../employees"><button>Back to All Employees</button></Link>
        <section>
          <h2>Employee not found!</h2>
        </section>
      </div>
    );
  }

  let tasks = useSelector(state =>
    state.tasks.filter(task => employee.id === task.employeeId)
  );

  return (
    <div>
      <Link to="../employees"><button>Back to All Employees</button></Link>
      <hr/>
      <section>
        <article>
          <h2>{employee.firstname} {employee.lastname}</h2>
          <p>Department: {employee.department ? employee.department : "None"}</p>
          <p>Tasks: {(tasks.length===0) ? "None" : null}</p>
          <ul style={{textAlign: "left"}}>
            {tasks.map((task) => {
              return (
                <li><Link to={`../tasks/${task.id}`}>{task.content}</Link> ({task.completed ? "completed" : "in progress"})</li>
              )
            })}
          </ul>
        </article>
      </section>
      <hr/>
      <Link to={`edit/`}><button>Edit</button></Link>
      <Link to="../employees"><button onClick={() => deleteEmployee(employee.id)}>Delete</button></Link>
    </div>
  );
}

export default SingleEmployeeView;