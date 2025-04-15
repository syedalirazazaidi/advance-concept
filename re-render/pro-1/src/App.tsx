// React.memo , usememo , useCallback

import { useState, useCallback } from 'react';import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState("");

  const handleClick = () => setCount(count + 1);
  const handleChildClick = useCallback(() => {
    console.log('Child clicked');
  }, []);
  return (
    <div>
      <input
        value={otherState}
        onChange={(e) => setOtherState(e.target.value)}
      />
      <button onClick={handleClick}>Increment: {count}</button>
      <ChildComponent count={count} onClick={handleChildClick}/>
    </div>
  );
}

export default App;
