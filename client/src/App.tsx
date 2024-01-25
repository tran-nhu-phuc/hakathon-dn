import React, { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/add-note/add-note";
import ListNote from "./components/list-notes/list-notes";
import baseAxios from "./configs/base-axios.config";
import ModalUpdate from "./components/modal-update/modal-update";
import { ToastContainer, toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [dataNote, setDataNote] = useState<any>();
  const [statusData, setStatusData] = useState<boolean>(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
  const [getIdUpdate, setGetIdUpdate] = useState<number>();
  const handleGetId = (idUpdate: number) => {
    setGetIdUpdate(idUpdate);
  };
  console.log(getIdUpdate);
  const handlePopUp = (statusOpen: boolean) => {
    setIsOpenPopUp(statusOpen);
  };
  const handleAddNewDataNote = async (newData: any) => {
    try {
      if (newData.content !== "") {
        await baseAxios.post(`/api/v1/notes`, newData);
        handleChangeStatus();
        console.log("ok add new");
        toast.success("Thêm thành công");
      } else {
        toast.error("dữ liêu rỗng");
        console.log("dữ liệu rỗng");
      }
    } catch (error) {
      console.log("lỗi add");
    }
  };
  const handleUpdate = async (newDataUpdate: any) => {
    try {
      if (newDataUpdate.content !== "") {
        await baseAxios.patch(`/api/v1/notes/${getIdUpdate}`, newDataUpdate);
        handleChangeStatus();
        handlePopUp(false);
        toast.success("Cập nhật thành công");
        console.log("ok update");
      }
    } catch (error) {
      console.log("error update");
    }
  };
  const handleDeleteNote = async (id: number) => {
    try {
      await baseAxios.delete(`/api/v1/notes/${id}`);
      handleChangeStatus();
      toast.success("Xóa thành công");
    } catch (error) {
      console.log("delete error");
    }
  };
  const handleChangeStatus = () => {
    setStatusData(!statusData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await baseAxios.get("/api/v1/notes");
        setDataNote([...result.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [statusData]);
  return (
    <div className="App">
      <AddNote handleAddNewDataNote={handleAddNewDataNote} />
      <ListNote
        dataNote={dataNote}
        handleDeleteNote={handleDeleteNote}
        handlePopUp={handlePopUp}
        handleGetId={handleGetId}
      />
      {isOpenPopUp ? (
        <ModalUpdate handlePopUp={handlePopUp} handleUpdate={handleUpdate} />
      ) : null}
      <ToastContainer />
    </div>
  );
}

export default App;
