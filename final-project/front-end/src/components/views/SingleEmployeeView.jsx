function SingleEmployeeView({employee}) {
    if (!employee) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
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