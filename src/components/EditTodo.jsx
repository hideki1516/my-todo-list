import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

export const EditTodo = (props) => {
  const { onSubmit, value, onChange, onClick } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <HStack>
          <Input
            type="text"
            placeholder="変更内容を入力"
            value={value}
            onChange={onChange}
            size="md"
            borderColor="gray.300"
          />
          <Button type="submit" px={10} bgColor="gray.300">
            更新
          </Button>
          <Button onClick={onClick} px={10} bgColor="gray.300">
            キャンセル
          </Button>
        </HStack>
      </form>
    </div>
  );
};
