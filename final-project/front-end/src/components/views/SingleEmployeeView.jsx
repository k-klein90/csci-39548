function SingleEmployeeView({user}) {
    if (!user) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
        );
      }
    
      return (
        <section>
          <article className="user">
            <h2>{user.id}</h2>
            {/*<p className="task-title">{task.content}</p>*/}
          </article>
        </section>
      );
}

export default SingleEmployeeView;