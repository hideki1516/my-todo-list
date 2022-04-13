import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import { InputTodo } from "./components/InputTodo";
import { EditTodo } from "./components/EditTodo";
import { FilterStatus } from "./components/FilterStatus";
import { FilteredTodoList } from "./components/FilteredTodoList";

import { Header } from "./organisms/Header";
import { theme } from "./theme/Theme";

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(1);

  // 編集
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // フィルター
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [filter, setFilter] = useState("notStarted");

  // ソート
  const [sort, setSort] = useState({});

  // 追加機能
  const handleAddTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (todoTitle === "") return;
    const newTodoItems = [
      ...todoList,
      {
        id: todoId,
        title: todoTitle,
        status: "notStarted",
      },
    ];
    setTodoId(todoId + 1);
    setTodoList(newTodoItems);
    setTodoTitle("");
  };

  // 削除機能
  const onClickDelete = (index) => {
    //
    const removeItems = [...todoList];
    removeItems.splice(index, 1);
    setTodoList(removeItems);
  };

  // 編集機能
  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const onClickEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItems = todoList.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodoList(updatedItems);
  };

  // フィルター機能
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStatusChange = ({ id }, e) => {
    const newTodoList = todoList.map((todo) => ({
      ...todo,
    }));

    setTodoList(
      newTodoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: e.target.value,
            }
          : todo
      )
    );
  };

  useEffect(() => {
    const filteringTodoList = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodoList(
            todoList.filter((todo) => todo.status === "notStarted")
          );
          break;
        case "inProgress":
          setFilteredTodoList(
            todoList.filter((todo) => todo.status === "inProgress")
          );
          break;
        case "done":
          setFilteredTodoList(
            todoList.filter((todo) => todo.status === "done")
          );
          break;
        default:
          // All:上記の分岐に当てはまらない場合は現在のtodoListを表示
          setFilteredTodoList(todoList);
      }
    };
    filteringTodoList();
  }, [filter, todoList]);

  // ソート機能
  useEffect(() => {
    let sortedTodoList = todoList;
    if (sort.key) {
      sortedTodoList = sortedTodoList.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];
        return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
      });
    }
    return sortedTodoList;
  }, [sort, todoList]);

  const handleSort = (key) => {
    if (sort.key === key) {
      // ソートボタンを連続でクリックした場合
      // ソートの並びを反転させたいため、stateのorder:1の数位にマイナスを付与する
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1,
      });
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={"1rem"}>
        <Header />
        <Box p={5} bg="white" minH="calc(100vh - 90px)">
          <Box mb={2} w="40%">
            {isEditing ? (
              <Heading as="h2" fontSize="x-large">
                Edit Todo
              </Heading>
            ) : (
              <Heading as="h2" fontSize="x-large">
                Add Todo
              </Heading>
            )}
          </Box>

          <HStack p={5} mb={5} bg="gray.100">
            {isEditing ? (
              <EditTodo
                value={currentTodo.title}
                onSubmit={handleEditFormSubmit}
                onChange={handleEditInputChange}
                onClick={handleEditCancel}
              />
            ) : (
              <InputTodo
                value={todoTitle}
                onSubmit={handleAddFormSubmit}
                onChange={handleAddTodoTitle}
              />
            )}
            <Spacer />
            <Flex>
              <FilterStatus value={filter} onChange={handleFilterChange} />
              <Button onClick={() => handleSort("id")} bgColor="gray.300">
                ID
              </Button>
            </Flex>
          </HStack>

          <FilteredTodoList
            filteredTodoList={filteredTodoList}
            handleStatusChange={handleStatusChange}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
