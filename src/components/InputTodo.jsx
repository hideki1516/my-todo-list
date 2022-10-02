import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

export const InputTodo = (props) => {
  const { onSubmit, value, onChange } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <HStack>
          <Input
            type="text"
            placeholder="TODOを入力"
            value={value}
            onChange={onChange}
            size="md"
            borderColor="gray.300"
          />
          <Button type="submit" px={10} bgColor="gray.300">
            追加
          </Button>
        </HStack>
      </form>
    </div>
  );
};
