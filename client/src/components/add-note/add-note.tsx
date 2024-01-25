import { useRef, useState } from "react";
import "./add-note.css";
import { MdOutlinePlaylistAdd } from "react-icons/md";
interface Props {
  handleAddNewDataNote: Function;
}
const AddNote: React.FC<Props> = (props: Props) => {
  const [newContent, setNewContent] = useState<string>();
  const newData = {
    content: newContent,
  };
  return (
    <div className="header-note-app">
      <div className="header-note">
        <h1>Note App</h1>
      </div>
      <div className="add-new-note">
        <div className="table-content-add">
          <p>title</p>
          <textarea
            className="box-add-new"
            onChange={(e: any) => {
              setNewContent(e.target.value);
            }}
          ></textarea>
          <button className="icon-add-new">
            <MdOutlinePlaylistAdd
              onClick={() => {
                props.handleAddNewDataNote(newData);
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNote;
