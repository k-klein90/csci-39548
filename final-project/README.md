This assignment is a fullstack CRUD application.<br/>
<br/>
"Using Node, Express, React, Redux, PostgreSQL, and Sequelize, build a RESTful full-stack web application to manage tasks and employees. This will cover all of the CRUD operations: Create, Read, Update, and Delete. This will encompass writing models, querying a database with an ORM, designing routes/endpoints and handler functions to process user requests and generate responses, writing out React Components, managing the state of the application with React-Redux, and much more. This will also involve having two individual repositories/applications (a separate server and a separate client), which encourages separation of concerns and modularity."<br/>
<br/>
Full instructions and rubric: https://docs.google.com/document/d/1ioCrS7uzKSkH8d-L04xMeHsq5GbkiAfwPNyLUoqrb04/<br/>
<br/>
Assignment completed individually<br/>
<br/>
Bug: When a task is deleted from AllTasksView or from SingleTaskView, AllTasksView will break with the error "Rendered fewer hooks than expected." Refreshing the page shows the expected result of the deletion. The error does not occur when the logic for getting the name of the task's employee is removed. The problem may be caused by the useSelector hook.
