import { memo } from "react";
function ChildComponent({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  console.log("ChildComponent rendered");
  return <div onClick={onClick}>Count: {count}</div>;
}
export default memo(ChildComponent);
