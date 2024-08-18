import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function SingleTaskView({ task, deleteTask }) {
  if (!task) {
    return (
      <div>
        <Link to="../tasks"><button>Back to All Tasks</button></Link>
        <section>
          <h2>Task not found!</h2>
        </section>
      </div>
    );
  }

  let priorities = ["Low", "Medium", "High"];

  let employeeName;
  if (task.employee){
    let employee = useSelector(state =>
      state.employees.find(employee => employee.id === task.employeeId)
    );
    employeeName = <Link to={`../employees/${task.employeeId}`}>{employee.firstname} {employee.lastname}</Link>
  } else {
    employeeName = "None";
  }

  return (
    <div>
      <Link to="../tasks"><button>Back to All Tasks</button></Link>
      <hr/>
      <section>
        <article>
          <h2>{task.content}</h2>
          <p>Status: {task.completed ? "Completed" : "In Progress"}</p>
          {task.completed ? null : <p>Priority: {priorities[task.priority-1]}</p>}
          <p>Assigned to: {employeeName}</p>
        </article>
      </section>
      <hr/>
      <Link to={`edit/`}><button>Edit</button></Link>
      <Link to="../tasks"><button onClick={() => deleteTask(task.id)}>Delete</button></Link>
    </div>

  );
}

export default SingleTaskView;