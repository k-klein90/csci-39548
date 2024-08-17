import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function SingleTaskView({ task }) {
  if (!task) {
    return (
      <div>
        <Link to="../tasks">Back to all tasks</Link>
        <section>
          <h2>Task not found!</h2>
        </section>
      </div>
    );
  }

  let priorities = ["Low", "Medium", "High"];

  let employeeName;
  if (task.employee){
    const employee = useSelector(state =>
      state.employees.find(employee => employee.id === task.employeeId)
    );
    employeeName = <Link to={`../employees/${task.employeeId}`}>{employee.firstname} {employee.lastname}</Link>
  } else {
    employeeName = "None";
  }

  return (
    <div>
      <Link to="../tasks">Back to all tasks</Link>
      <section>
        <article>
          <h2>{task.content}</h2>
          <p>Priority: {priorities[task.priority-1]}</p>
          <p>Assigned to: {employeeName}</p>
        </article>
      </section>
      <hr/>
      <Link to={`edit/`}>Edit task information</Link>

    </div>

  );
}

export default SingleTaskView;