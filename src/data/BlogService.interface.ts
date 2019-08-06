import { IBlog } from "../models/Blog";

export interface IBlogService {
    getAllPosts(): Promise<IBlog[]>;
}