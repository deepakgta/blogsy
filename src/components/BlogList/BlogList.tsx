import React, { useEffect, useState } from "react";
import { Stack, Text, FontWeights, Spinner, SpinnerSize, Toggle } from "office-ui-fabric-react";
import { loadTheme } from "office-ui-fabric-react/lib/Styling";
import { BlogCardList } from "../BlogCardList/BlogCardList";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const BlogList: React.FunctionComponent = () => {
  loadTheme({
    palette: {
      themePrimary: "#0078d4"
    }
  });

  const toggle = (ev: React.MouseEvent<HTMLElement>, checked?: boolean) => {
    loadTheme({
      palette: {
        themeDark: "#005a9e"
      }
    });
  };

  const [blogPosts, AddBlogPost] = useState();
  // const { BlogService } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data/posts.json").then(res =>
        res.json()
      );
      AddBlogPost(data);
    };

    fetchData();

    }, []);

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c"
        }
      }}
      gap={15}
    >
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Blogsy!
      </Text>
      <Toggle
        defaultChecked={false}
        offText="Dark"
        onText="Light"
        inlineLabel={true}
        onChange={toggle}
      />
      <Stack.Item grow>
        {!!blogPosts ? (
          <BlogCardList blogs={blogPosts} />
        ) : (
          <Spinner size={SpinnerSize.large} label={"Loading Posts..."} />
        )}
      </Stack.Item>
    </Stack>
  );
};
