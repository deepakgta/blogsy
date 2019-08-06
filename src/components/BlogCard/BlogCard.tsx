import React from "react";
import { Card } from "@uifabric/react-cards";
import { IBlogCardProps } from "./BlogCard.interface";
import { BlogCardWidth } from "../../styles/constants";
import {
  Stack,
  Text,
  TooltipHost,
  TooltipOverflowMode
} from "office-ui-fabric-react";

export const BlogCard: React.FC<IBlogCardProps> = (props) => { 
    const { blog } = props;
    return (
      <Card
        key={blog.id}
        // TODO: better way to do this navigation?
        // Can't easily do it declaratively with a router <Link> since Card is clickable.
        // tslint:disable-next-line:jsx-no-lambda
        // onClick={() => navigate(url)}
        tokens={{ childrenMargin: 20, width: BlogCardWidth, height: 180 }}
      >
        <Card.Item>
          <Stack horizontalAlign="start" tokens={{ childrenGap: 8 }}>
            <Stack
              horizontal
              tokens={{ childrenGap: 4 }}
              verticalAlign="center"
              styles={{ root: { maxWidth: "100%" } }}
            >
              <Text variant="xLarge" nowrap block>
                <TooltipHost
                  content={blog.title}
                  overflowMode={TooltipOverflowMode.Parent}
                >
                  {blog.title}
                </TooltipHost>
              </Text>
            </Stack>
          </Stack>
        </Card.Item>
        <Card.Section>
          <Text variant="large" nowrap block>
            {blog.text}
          </Text>
        </Card.Section>
      </Card>
    );
};