import { useState, useEffect } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.scss";
import axios from "axios";
import { Comment } from "../../interfaces/envent";

interface CommentsProps {
    eventId: string;
}

const Comments: React.FC<CommentsProps> = ({ eventId }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setCommments] = useState<Comment[]>([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`/api/comments/${eventId}`);
            setCommments(data.comments);
        };

        if (!showComments) {
            getData();
        }
    }, [showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    async function addCommentHandler(commentData: any) {
        // send data to API
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios.post(`/api/comments/${eventId}`, commentData, headers);

        console.log("addComment");
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? "Hide" : "Show"} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList comments={comments} />}
        </section>
    );
};

export default Comments;
