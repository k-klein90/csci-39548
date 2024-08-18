import { Link } from "react-router-dom";

function EditTaskView({ task, employees, handleSubmit}) {
  if (!task) {
    return (
      <section>
        <h2>Task not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <h2>Edit Task Information</h2>
      <form onSubmit={handleSubmit} id="edittaskform">
        <label> Description:
          <input name="taskContent" defaultValue={task.content} required/>
        </label>
        <p> Priority level:
          <label>
            <input type="radio" name="taskPriority" value="1" required/> Low
          </label>
          <label>
            <input type="radio" name="taskPriority" value="2" /> Medium
          </label>
          <label>
            <input type="radio" name="taskPriority" value="3" /> High
          </label>
        </p>
        <label> Completion status:
          <select name="completed" defaultValue={task.completed} required>
            <option value="false">In Progress</option>
            <option value="true">Completed</option>
          </select>
        </label>
        <br/><br/>
        <label> Employee assigned:
          <select name="employeeId" defaultValue="null" required>
            <option value="null">None</option>
            {employees.map(emp => {
              let name = emp.firstname + " " + emp.lastname;
              return <option key={emp.id} value={emp.id}>{name}</option>;
            })}
          </select>
        </label>
        <br/>
        <button>Save Task</button>
      </form>
      <br/>
      <Link to={`/tasks`}><button>Back to All Tasks</button></Link>
    </div>

  );
}

export default EditTaskView;