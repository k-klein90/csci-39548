import { Link } from "react-router-dom";

function NewEmployeeView({ handleSubmit }) {
  return (
    <section>
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit} id="newemployeeform">
        <label>
          First name: <input name="firstName" required /><br/><br/>
          Last name: <input name="lastName" required /><br/><br/>
          Department: <input name="department" /><br/>
        </label>
        <button>Save Employee</button>
      </form>
      <br/>
      <Link to={`/employees`}><button>Back to All Employees</button></Link>
    </section>
  )
}

export default NewEmployeeView;