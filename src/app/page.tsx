import PocketBase, { Record } from "pocketbase";

// controls caching (we don't want to cache the result of this fetch)
export const revalidate = 0;

const pb = new PocketBase("http://127.0.0.1:8090");

// TODO: add pagiation
async function fetchNotes(): Promise<Record[]> {
  const notes = await pb.collection("notes").getFullList();
  return notes;
}

export default async function Notes() {
  const noteList = await fetchNotes();

  return (
    <div className="flex flex-row justify-evenly">
      {noteList.map((note) => {
        return (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        );
      })}
    </div>
  );
}
