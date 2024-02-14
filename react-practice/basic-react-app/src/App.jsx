import { useState } from 'react';
import TodoCard from './components/TodoCard';


function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "This is title 1", 
      description: "This is description 1",
      completed: false
    },
    {
      id: 2,
      title: "This is title 2", 
      description: "This is description 2",
      completed: true
    },
    {
      id: 3,
      title: "This is title 3", 
      description: "This is description 3",
      completed: true
    }
  ]);

  const[newTitle, setNewTitle] = useState("");
  const[newDescription, setNewDescription] = useState("");

  function submit(){
    if(newTitle.length == 0 && newDescription == 0){
      alert("Title and Description Required");
      return;
    }
    const newTodo = {
      id: list.length === 0 ? 0 : list[list.length - 1].id + 1,
      title: newTitle,
      description: newDescription,
      completed: false
    }
    setList([...list, newTodo]);
    setNewTitle("");
    setNewDescription("");
  }

  return (
    <>
      <Fields submit={submit} newTitle={newTitle} setNewTitle={setNewTitle} newDescription={newDescription} setNewDescription={setNewDescription}/>
      <div>
        {
        list.map(todo => 
          <TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed}/>
        )
        }
      </div>
    </>
  )
}

function Fields(props){
  return (
    <div>
      <input type="text" id='titleValue' onChange={(e) => props.setNewTitle(e.target.value)} value={props.newTitle} placeholder='Enter the title'/>
      <input type="text" id='descriptionValue' onChange={(e) => props.setNewDescription(e.target.value)} value={props.newDescription} placeholder='Enter the description'/>
      <button onClick={props.submit}>Submit</button>
    </div>
  )
}

export default App;
