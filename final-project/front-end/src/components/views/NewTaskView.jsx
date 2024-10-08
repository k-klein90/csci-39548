import { Link } from "react-router-dom";

function NewTaskView({ handleSubmit, employees }) {
  let selectPriority = (
    <p> Priority level:
      <label>
        <input type="radio" name="taskPriority" value="1" /> Low
      </label>
      <label>
        <input type="radio" name="taskPriority" value="2" /> Medium
      </label>
      <label>
        <input type="radio" name="taskPriority" value="3" /> High
      </label>
    </p>
  );

  let selectEmployee = (
    <label> Employee assigned:
      <select name="employeeId" defaultValue="null">
        <option value="null">None</option>
        {employees.map(emp => {
          return <option key={emp.id} value={emp.id}>{emp.firstname} {emp.lastname}</option>;
        })}
      </select>
    </label>
  );
  return (
    <section>
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit} id="newtaskform">
        <label>
          Description: <input name="taskContent" />
        </label>
        {selectPriority}
        {selectEmployee}
        <br/>
        <button>Save Task</button>
      </form>
      <br/>
      <Link to={`/tasks`}><button>Back to All Tasks</button></Link>
    </section>
  )

}

export default NewTaskView;