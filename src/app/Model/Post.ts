import { User } from "./User";
import { Comment } from "./Comment";

export interface Post {
    id: number;
    title: string;
    content: string;
    createdDate: Date;
    likes: number;
    favorites: number[];
    user: User | null; // Modification du type pour accepter null
    comments: Comment[];
}
