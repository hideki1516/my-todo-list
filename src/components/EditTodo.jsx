import { Button, Input } from "@chakra-ui/react";
import React from "react";

export const EditTodo = (props) => {
  const { onSubmit, value, onChange, onClick } = props;

  return (
    <div>
      <h1>Edit Todo</h1>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="変更内容を入力"
          value={value}
          onChange={onChange}
          size="md"
        />
        <Button type="submit">更新</Button>
        <Button onClick={onClick}>キャンセル</Button>
      </form>
    </div>
  );
};
