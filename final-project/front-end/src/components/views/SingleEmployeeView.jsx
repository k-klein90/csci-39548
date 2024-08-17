import {Link} from "react-router-dom";

function SingleEmployeeView({employee}) {
    if (!employee) {
        return (
          <div>
            <Link to="../employees">Back to all employees</Link>
            <section>
              <h2>Employee not found!</h2>
            </section>
          </div>
        );
      }
    
      return (
        <section>
          <article className="employee">
            <h2>{employee.id}</h2>
            {/*<p className="task-title">{task.content}</p>*/}
          </article>
        </section>
      );
}

export default SingleEmployeeView;