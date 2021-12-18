import React from 'react'
import {useSelector, useDispatch} from'react-redux'
import { increment, decrement } from '../store/reducers/counter';


const Count = () => {
  const number = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <span>{number}</span>
      <button type='button' onClick={() => dispatch(increment())}>UP</button>
      <button type='button' onClick={() => dispatch(decrement())}>DOWN</button>
    </>
  )
}

export default Count;