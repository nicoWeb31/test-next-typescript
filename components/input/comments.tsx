import { useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.scss";
import axios from "axios";

interface CommentsProps {
    eventId: string;
}

const Comments: React.FC<CommentsProps> = ({ eventId }) => {
    const [showComments, setShowComments] = useState(false);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    async function addCommentHandler(commentData : {}) {
        // send data to API
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios.post(
            `/api/comments/${eventId}`,
            { commentData },
            headers
        );
        
        console.log('addComment')
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? "Hide" : "Show"} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList />}
        </section>
    );
};

export default Comments;
