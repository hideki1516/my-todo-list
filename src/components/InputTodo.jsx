import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";

export const InputTodo = (props) => {
  const { onSubmit, value, onChange } = props;

  return (
    <div>
      <Heading as="h2" fontSize={{ base: "md", md: "lg" }}>
        Add Todo
      </Heading>
      <form onSubmit={onSubmit}>
        <Flex>
          <Input
            type="text"
            placeholder="TODOを入力"
            value={value}
            onChange={onChange}
            size="md"
            w="40%"
          />
          <Button type="submit">追加</Button>
        </Flex>
      </form>
    </div>
  );
};
