import React from "react";
import { Box, Typography } from "../../../styles";
import { ContainerPost, Author, Date } from "./post.styles";


const Post = ({ post }) => {
    return (
        <Box pb={30}>
            <ContainerPost>
                <Typography color="primary" fontStyle="ligth">
                    {post.text}
                </Typography>
                <Author>- {post.name}</Author>
            </ContainerPost>
            <Date>Posted: {post.created_at}</Date>
        </Box>
    );
};

export default Post;
