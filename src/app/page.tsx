import { Record } from "pocketbase";
import { dbConnection } from "./db";
import { CreateNoteForm } from "./CreateNoteForm";

// controls caching (we don't want to cache the result of this fetch)
export const revalidate = 0;

// TODO fetch configs from .env file
// replacew it with Supabase later

// TODO: add pagiation
async function fetchNotes(): Promise<Record[]> {
  const notes = await dbConnection.collection("notes").getFullList();
  return notes;
}

export default async function Notes() {
  const noteList = await fetchNotes();

  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex flex-row justify-evenly gap-4">
        {noteList.map((note) => {
          return (
            <div key={note.id}>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        <CreateNoteForm />
      </div>
    </div>
  );
}
