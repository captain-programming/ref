import { useRef } from "react";

function FocusInput() {
  const ref = useRef([]);
  const handleClick = () => {
    console.log(ref);
  };
  // callback
  return (
    <div>
      <h3>Focus Input</h3>
      <input ref={ref} placeholder="type something" />
      <div>
        <button onClick={handleClick}>FOCUS</button>
      </div>
    </div>
  );
}

export default FocusInput;
