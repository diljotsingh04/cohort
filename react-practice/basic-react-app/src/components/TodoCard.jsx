import "./TodoCard.css";

const TodoCard = (props) => {
  return (
    <div className="todoCard">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <span>
            <input type="checkbox" id={props.id} defaultChecked={props.completed} />
            <label htmlFor={props.id}>{props.completed ? "Done" : "Completed"}</label>
        </span>
    </div>
  ) 
}

export default TodoCard;