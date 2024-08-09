//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
      case 'employees/employeeDeleted':
        return state.filter(user => user.id!==action.payload);
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/employees`);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

export const deleteEmployee = userId => async dispatch => {
  try {
    await axios.delete(`${PATH}/${userId}`);
    //if delete successful, change state with dispatch
    dispatch({type: 'employees/employeeDeleted', payload: userId});
  } catch(err) {
    console.error(err);
  }
};