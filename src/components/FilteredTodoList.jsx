import {
  Box,
  Button,
  Flex,
  HStack,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const FilteredTodoList = (props) => {
  const { filteredTodoList, handleStatusChange, onClickEdit, onClickDelete } =
    props;

  return (
    <ul>
      <Stack>
        {filteredTodoList.map((todo, index) => (
          <HStack
            spacing={1}
            key={todo.id}
            w="full"
            h="50px"
            border="1px"
            borderColor="gray.200"
            p="2"
          >
            <span>{todo.id}：</span>
            <span>{todo.title}</span>
            <Spacer />
            <Select
              w="20%"
              value={todo.status}
              onChange={(e) => handleStatusChange(todo, e)}
            >
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </Select>
            <Button onClick={() => onClickEdit(todo)} bgColor="gray.300">
              編集
            </Button>
            <Button onClick={() => onClickDelete(index)} bgColor="gray.300">
              削除
            </Button>
          </HStack>
        ))}
      </Stack>
    </ul>
  );
};
