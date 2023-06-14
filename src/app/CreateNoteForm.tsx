'use client';

import React from "react";
import { dbConnection } from "./db";
import { useRouter } from "next/navigation";

export function CreateNoteForm() {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const router = useRouter();

  const onTitleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  const onContentChange = React.useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }, []);

  const onSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dbConnection.collection("notes").create({
      title,
      content,
    });

    setTitle('');
    setContent('');

    router.refresh();
  }, [content, router, title]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <h3>Create a new note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={onContentChange}
      />
      <button type="submit" className="border-2 border-black">Create</button>
    </form>
  );
}