import React from "react";
import { Stack, IStackTokens } from "office-ui-fabric-react";
import { BlogCardChildrenGap } from "../../styles/constants";
import { IBlogCardListProps } from "./BlogCardList.interface";
import { BlogCard } from "../BlogCard/BlogCard";

const stackTokens: IStackTokens = {
  childrenGap: BlogCardChildrenGap
}

export const BlogCardList: React.FC<IBlogCardListProps> = (props) => {
  const { blogs } = props;

  return (
    <Stack
      horizontal
      wrap
      verticalAlign="center"
      horizontalAlign="start"
      tokens={stackTokens}
    >
      {blogs.map(blog => <BlogCard blog={blog} key={blog.id}/>)}
    </Stack>
  );
};