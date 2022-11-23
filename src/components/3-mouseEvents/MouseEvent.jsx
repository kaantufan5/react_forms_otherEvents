import { FaReact, FaEvernote } from "react-icons/fa";
import { useState } from "react";

const MouseEvent = () => {
  const [visible, setVisible] = useState(false);

  const [toggleBG, setToggleBG] = useState(false);

  const handleDoubleClick = (e) => {
    setToggleBG(!toggleBG);
    toggleBG
      ? (e.target.className = "bg-danger text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-success text-light w-50 p-4 mt-4");
  };

  // const handleMouseCoord = (e) => {
  //   setGlobalCoords({
  //     coordX: e.screenX,
  //     coordY: e.screenY,
  //   });
  // };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseLeave={() => setVisible(false)}
        onMouseEnter={() => setVisible(true)}
      >
        todo item 1 <FaReact />
      </div>
      {visible && <span>This is a hint</span>}

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2 <FaEvernote />
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3 <FaReact />
      </div>

      <p>X and Y</p>
      {/* <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p> */}
    </div>
  );
};

export default MouseEvent;
