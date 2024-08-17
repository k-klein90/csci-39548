import './styles/all-objects-view.css';

import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

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
            <div key={task.id} id="liStyle">
              <h3>Task #{idx+1}: <Link to={`/tasks/${task.id}`}>{task.content}</Link></h3>
              <h4>Assigned to: {employeeName}</h4>
              <h4>Priority level: {priorities[task.priority-1]}</h4>
              <h4>Status: {task.completed ? "Completed" : "In Progress"}</h4>
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