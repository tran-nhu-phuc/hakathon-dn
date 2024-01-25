import React, { useState } from "react";
import "./modal-update.css";
interface Props {
  handlePopUp: Function;
  handleUpdate: Function;
}
const ModalUpdate: React.FC<Props> = (props: Props) => {
  const [newContent, setNewContent] = useState<string>("");
  const newDataUpdate = {
    content: newContent,
  };
  return (
    <div className="table-modal-update">
      <div className="box-modal-update">
        <textarea
          onChange={(e: any) => setNewContent(e.target.value)}
        ></textarea>
        <button onClick={() => props.handleUpdate(newDataUpdate)}>save</button>
        <span
          className="close-modal-update"
          onClick={() => props.handlePopUp(false)}
        >
          x
        </span>
      </div>
    </div>
  );
};
export default ModalUpdate;
