import { UserNote } from "../lib/db";

interface NoteProps {
    title: string;
    content: string;
}

const Note: React.FC<NoteProps> = ({ title, content }) => {
  return (
    <div className="card">
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
    <div className="note-list">
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