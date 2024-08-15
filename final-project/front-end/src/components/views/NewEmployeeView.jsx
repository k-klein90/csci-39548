import { Link } from "react-router-dom";

function NewEmployeeView({ handleSubmit, employees }) {
    return (
        <section>
          <h2>Add a New Employee</h2>
          <form onSubmit={handleSubmit} id="newemployeeform">
            <label>
              First name: <input name="firstName" /><br />
              Last name: <input name="lastName" /><br />
              Department: <input name="department" /><br />
              <br />
            </label>
            <button>Save Employee</button>
          </form>
          <br/>
          <Link to={`/employees`}><button style={{margin: "8px"}}>Back to All Employees</button></Link>
        </section>
      )
}

export default NewEmployeeView;