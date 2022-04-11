import React from "react";

export const InputTodo = (props) => {
  const { onSubmit, value, onChange } = props;

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="TODOを入力"
          value={value}
          onChange={onChange}
        />
        <button type="submit">追加</button>
      </form>
    </div>
  );
};
