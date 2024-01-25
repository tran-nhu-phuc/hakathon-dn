import { Op } from "sequelize";
import NoteApp from "../models/note.models";

class NoteRepository {
  async getAll() {
    return NoteApp.findAll();
  }
  async getInFoNoteApp(id: number) {
    return NoteApp.findAll({
      where: {
        id,
      },
    });
  }
  async addNewNote(newData: any) {
    await NoteApp.create(newData);
  }
  async updateNote(id: number, newData: any) {
    const data = await NoteApp.update(newData, {
      where: {
        id,
      },
    });
    return data;
  }
  async deleteNote(id: number) {
    await NoteApp.destroy({
      where: {
        id,
      },
    });
  }
}
export default NoteRepository;
