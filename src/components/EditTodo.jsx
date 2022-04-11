import React from "react";

export const EditTodo = (props) => {
  const { onSubmit, todoTitle, onChange, setIsEditing } = props;

  return (
    <div>
      <h1>Edit Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="変更内容を入力"
          value={todoTitle}
          onChange={onChange}
        />
        <button type="submit">更新</button>
        <button onClick={() => setIsEditing(false)}>キャンセル</button>
      </form>
    </div>
  );
};
