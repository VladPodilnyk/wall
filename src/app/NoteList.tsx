import { UserNote } from "./db";

interface NoteProps {
    title: string;
    content: string;
}

const Note: React.FC<NoteProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col min-w-[10rem] min-h-[10rem] bg-white border-solid border-2 border-black">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};


interface NoteListProps {
  notes: UserNote[];
}

export const NoteList: React.FC<NoteListProps> = ({notes}) => {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-4">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </div>
  );
};