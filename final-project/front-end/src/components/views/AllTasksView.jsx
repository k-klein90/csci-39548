import './styles/all-objects-view.css';

import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

/* BUG:
 * When a task is deleted from AllTasksView or from SingleTaskView,
 * AllTasksView will break with the error "Rendered fewer hooks than
 * expected." Refreshing the page shows the expected result of the
 * deletion. The error does not occur when the logic for getting the
 * name of the task's employee is removed. The problem may be caused
 * by the useSelector hook.
 */
function AllTasksView({tasks, deleteTask}) {

  if (!tasks.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <Link to={`/tasks/new`}><button>Add Task</button></Link>
        <div>There are no tasks.</div>
      </>
    );
  }

  return (
    <div id="bgview">
      <Link to={`/`}><button>Back to Home</button></Link>
      <Link to={`/tasks/new`}><button>Add Task</button></Link>
      <div id="ulStyle">
        {tasks.map((task, idx) => {
          let priorities = ["Low", "Medium", "High"];

          // Get name of employee who is assigned to the task
          let employee = useSelector(state =>
            state.employees.find(employee => employee.id === task.employeeId)
          );
          let employeeName;
          if (employee){
            employeeName = <Link to={`../employees/${task.employeeId}`}>{employee.firstname} {employee.lastname}</Link>
          } else {
            employeeName = "None";
          }

          return (
            <div key={task.id} id="liStyle">
              <h3>Task #{idx+1}: <Link to={`/tasks/${task.id}`}>{task.content}</Link></h3>
              <h4>Status: {task.completed ? "Completed" : "In Progress"}</h4>
              {task.completed ? null : <h4>Priority: {priorities[task.priority-1]}</h4>}
              <h4>Assigned to: {employeeName}</h4>
              <Link to={`/tasks/${task.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default AllTasksView;