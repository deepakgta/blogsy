import { IBlogService } from "./BlogService.interface";
import { IBlog } from "../models/Blog";

export class BlogService implements IBlogService{
    public async getAllPosts(): Promise<IBlog[]> {
        return await fetch(
            "./src/data/posts.json", {}
        ).then(res => res.json());
    }
}

