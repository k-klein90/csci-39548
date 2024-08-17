import { Link } from "react-router-dom";

function EditEmployeeView({ employee, handleSubmit}) {
    if (!employee) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
        );
      }

      return (
        <div>
        <h3 style={{textDecoration: "underline",}}>Edit employee information: </h3>
        <form onSubmit={handleSubmit} id="editemployeeform">
          <label>
            First name: <input name="firstName" required /><br />
            Last name: <input name="lastName" required /><br />
            Department: <input name="department" /><br />
          </label>
            <br/>
            <button>Save Employee</button>
          </form>
          <br/>
          <Link to={`../employees`}>Back to all employees</Link>
        </div>

      );
}

export default EditEmployeeView;