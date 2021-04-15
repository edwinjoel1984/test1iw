import React, { useEffect } from "react";
import { Grid, Box, Row } from "../../../styles";
import { Post } from "../../commons/";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../../../redux/posts/posts.actions";
import { initTask, endTask } from "../../../services/services.cron";

const SocialWidget = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        // Init first task
        initTask(result => dispatch(setPost(result))
        );

        // destroy cron
        return () => endTask();
    }, [dispatch]);

    return (
        <Row justify={"center"}>
            <Grid lg={12} xs={12}>
                <Box background="primary" p={50} mt={50}>
                    <MapPost posts={posts} />
                </Box>
            </Grid>
        </Row>
    );
};

export default SocialWidget;

const MapPost = ({ posts }) => posts.map(post => <Post key={post.id} post={post} />);
