import { useState } from "react";
import FocusInput from "./Component/FocusInput";
import Forms from "./Component/Forms";
import Timer from "./Component/Timer";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <h1>Timer</h1> */}
      {/* {show && <Timer />}
      <button onClick={() => setShow(!show)}>TOGGLE</button> */}
      {/* <FocusInput /> */}
      <Forms />
    </div>
  );
}
