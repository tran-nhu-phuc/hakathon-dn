import React from "react";
import "./list-note.css";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineSecurityUpdate } from "react-icons/md";
interface Props {
  dataNote: any;
  handleDeleteNote: Function;
  handlePopUp: Function;
  handleGetId: Function;
}
const ListNote: React.FC<Props> = (props: Props) => {
  return (
    <div className="table-list-data">
      {props.dataNote?.map((item: any) => {
        return (
          <div className="box-list-item">
            <p>{item.content}</p>
            <MdDeleteForever
              className="icon-delete-note"
              onClick={() => {
                props.handleDeleteNote(item.id);
              }}
            />
            <MdOutlineSecurityUpdate
              className="icon-update-note"
              onClick={() => {
                props.handlePopUp(true);
                props.handleGetId(item.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ListNote;
