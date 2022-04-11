import React from "react";

export const FilterStatus = (props) => {
  const { filter, onChange } = props;

  return (
    <select value={filter} onChange={onChange}>
      <option value="all">すべて</option>
      <option value="notStarted">未着手</option>
      <option value="inProgress">作業中</option>
      <option value="done">完了</option>
    </select>
  );
};
