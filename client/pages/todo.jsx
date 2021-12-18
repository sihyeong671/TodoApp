import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap'

import HeadInfo from '../src/component/HeadInfo';

const EditTodo = ({todo}) => {

  const [description, setDescription] = useState(todo.description);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateDescription = async (e) => {
    e.preventDefault();
    try{
      const data = {description};
      const response = await axios.put(`/todos/${todo.todo_id.toString()}`, data);
      window.location = '/todo'
    }catch(err){
      console.error(err);
    }
  }

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-warning"
            onClick={e => {
              handleClose();
              updateDescription(e);
            }}>
            Edit
          </Button>
          <Button
            variant="outline-primary"
            onClick={ () =>{
              handleClose();
              setDescription(todo.description);
            }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  //delete function
  const deleteTodo = async (id) => {
    try{
      // delete를 쿼리 파라미터로 보내는게 적당한 방법인가?
      const deleteTodo = await axios.delete(`/todos/${id.toString()}`);
      console.log(deleteTodo);
      setTodos(todos.filter(todo => todo.todo_id !== id));
    }catch(err){
      console.error(err);
    }
  }
  const getTodos = async () => {
    try{
      const response = await axios.get('/todos');
      const jsonData = await response.data;

      setTodos(jsonData);
    }catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    getTodos();
  },[])

  return(
    <>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Desciption</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo=>{
            return(
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo}></EditTodo></td>
                <td><button className='btn btn-danger' onClick={() =>deleteTodo(todo.todo_id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

const InputTodo = () => {

  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
      const data = {description};
      // const data = JSON.stringify(body); fetch에만 필요한것 같다
      const headers = {'Content-Type':'application/json'}
      const response = await axios.post('/todos', data, {headers});
      console.log(response);
      //리로드
      window.location = '/todo';
    }catch(err){
      console.error(err.message);
    }
  }

  return(
    <>
      <h1 className='text-center mt-5'>TODO LIST</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className='form-control'
          value={description} 
          onChange={e=>setDescription(e.target.value)}/>
        <button type='submit' className='btn btn-dark'>ADD</button>
      </form>
    </>
  )
}


const List = () => {

  return(
    <>
      <HeadInfo title="Todo List"></HeadInfo>
      <InputTodo></InputTodo>
      <ListTodos/>
    </>
  )
}

export default List;