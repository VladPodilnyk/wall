import PocketBase from "pocketbase";

// TODO: refactor project layout.
export interface UserInsertData {
    title: string;
    content: string;
}

export interface UserNote extends UserInsertData {
    id: number;
}

export const dbConnection = new PocketBase("http://127.0.0.1:8090");