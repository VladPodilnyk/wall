import { Record } from "pocketbase";
import { UserNote, dbConnection } from "./db";
import { CreateNoteForm } from "./CreateNoteForm";
import { NoteList } from "./NoteList";

// controls caching (we don't want to cache the result of this fetch)
export const revalidate = 0;

// TODO fetch configs from .env file
// replacew it with Supabase later

// TODO: add pagiation
async function fetchNotes(): Promise<UserNote[]> {
  const notes = await dbConnection.collection("notes").getFullList<UserNote>();
  return notes;
}

export default async function MainPage() {
  const noteList = await fetchNotes();

  return (
    <div className="flex flex-col justify-evenly">
      <NoteList notes={noteList}/>
      <CreateNoteForm />
    </div>
  );
}
