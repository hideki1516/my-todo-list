import { Button } from "@chakra-ui/react";
import React from "react";

export const FilteredTodoList = (props) => {
  const { filteredTodoList, handleStatusChange, onClickEdit, onClickDelete } =
    props;

  return (
    <ul>
      {filteredTodoList.map((todo, index) => (
        <li key={todo.id}>
          <span>{todo.id}：</span>
          <span>{todo.title}</span>
          <select
            value={todo.status}
            onChange={(e) => handleStatusChange(todo, e)}
          >
            <option value="notStarted">未着手</option>
            <option value="inProgress">作業中</option>
            <option value="done">完了</option>
          </select>
          <Button onClick={() => onClickEdit(todo)}>編集</Button>
          <Button onClick={() => onClickDelete(index)}>削除</Button>
        </li>
      ))}
    </ul>
  );
};
