import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { onInputChange, onResetForm, description } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length < 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control input"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-4 mb-4">
        Agregar
      </button>
    </form>
  );
};
