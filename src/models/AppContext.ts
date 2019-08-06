import React from "react";
import { BlogService } from "../data/BlogService";

export interface IAppContext {
    BlogService: BlogService;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);