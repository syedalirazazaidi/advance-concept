import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState("");

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <input
        value={otherState}
        onChange={(e) => setOtherState(e.target.value)}
      />
      <button onClick={handleClick}>Increment: {count}</button>
      <ChildComponent count={count} onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;

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
