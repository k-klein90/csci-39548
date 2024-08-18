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
      <h2>Edit Employee Information</h2>
      <form onSubmit={handleSubmit} id="editemployeeform">
        <label>
          First name: <input name="firstName" defaultValue={employee.firstname} required /><br/><br/>
          Last name: <input name="lastName" defaultValue={employee.lastname} required /><br/><br/>
          Department: <input name="department" defaultValue={employee.department} /><br/>
        </label>
        <button>Save Employee</button>
      </form>
      <br/>
      <Link to={`../employees`}><button>Back to All Employees</button></Link>
    </div>
  );
}

export default EditEmployeeView;