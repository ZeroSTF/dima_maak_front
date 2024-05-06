import { User } from "./User";
import { Comment } from "./Comment";

export interface Rating {
    id: number;
    rating: number;
    user: User;
    comment: Comment;
}
