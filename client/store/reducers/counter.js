import { HYDRATE } from "next-redux-wrapper";

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return{
    type: DECREMENT
  }
}

const initialState = {value: 0};

const counter = (state = initialState, action) => {
  switch(action.type){
    case HYDRATE:
      return {...state, ...action}
    case INCREMENT:
      return {value: state.value + 1};
    case DECREMENT:
      return {value: state.value - 1};
    
    default:
      return state;
  }
}

export default counter;