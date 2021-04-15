import React, { useEffect } from "react";
import { Post } from "../../commons/";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../../../redux/posts/posts.actions";
import { initTask, endTask } from "../../../services/services.cron";

const Test = () => {
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
            <MapPost posts={posts} />
    );
};

export default Test;

const MapPost = ({ posts }) => posts.map(post => <Post key={post.id} post={post} />);
