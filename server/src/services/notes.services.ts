import NoteRepository from "../repositories/notes.repository";

class NoteService {
  private noteRepository: NoteRepository;
  constructor() {
    this.noteRepository = new NoteRepository();
  }
  async getAll() {
    return await this.noteRepository.getAll();
  }
  async getInFoNoteApp(id: number) {
    return await this.noteRepository.getInFoNoteApp(id);
  }
  async addNewNote(newData: any) {
    await this.noteRepository.addNewNote(newData);
  }
  async updateNote(id: number, dataNew: any) {
    return await this.noteRepository.updateNote(id, dataNew);
  }
  async deleteNote(id: number) {
    return await this.noteRepository.deleteNote(id);
  }
}
export default NoteService;
