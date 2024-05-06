import { User } from "./User";
import { Post } from "./Post";
import { Rating } from "./Rating";

export interface Comment {
    id: number;
    content: string;
    createdDate: Date;
    user: User;
    post: Post;
    rating: number;
}
