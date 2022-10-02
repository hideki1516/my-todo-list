import React from "react";
import { Select } from "@chakra-ui/react";

export const FilterStatus = (props) => {
  const { filter, onChange } = props;

  return (
    <Select
      value={filter}
      onChange={onChange}
      borderColor="gray.300"
      mr={2}
      size="md"
    >
      <option value="allStatus">全て</option>
      <option value="notStarted">未着手</option>
      <option value="inProgress">作業中</option>
      <option value="done">完了</option>
    </Select>
  );
};