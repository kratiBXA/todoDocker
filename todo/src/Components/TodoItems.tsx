
type Props = {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onDelete }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
