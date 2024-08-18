import SingleTaskView from '../views/SingleTaskView';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from "../../store/tasksSlice.js";

function SingleTaskContainer() {
  const dispatch = useDispatch();

  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer

  //get task from state based on URL parameter
  const task = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
  );

  const deleteDispatch = (taskId) => dispatch(deleteTask(taskId));

  return <SingleTaskView task={task} deleteTask={deleteDispatch}/>
}

export default SingleTaskContainer;