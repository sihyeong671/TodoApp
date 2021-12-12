import Head from 'next/head';
import React, {useState} from 'react'
import HeadInfo from '../src/component/HeadInfo';
import { Input, Button, Icon } from 'semantic-ui-react'

const InputTodo = () => {

  const [description, setDescription] = useState('');

  const addList = () => {
    console.log('add');
  }

  return(
    <>
      <h1>TODO LIST</h1>
      <div>
        <Input icon='pencil alternate'/>
        <Button icon>
          <Icon onClick={addList} name='plus square outline'/>
        </Button>
      </div>
    </>
  )
}


const List = () => {

  return(
    <>
      <HeadInfo title="Todo List"></HeadInfo>
      <InputTodo></InputTodo>
    </>
  )
}

export default List;