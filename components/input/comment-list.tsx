import { Comment } from "../../interfaces/envent";
import classes from "./comment-list.module.scss";

interface CommentListProps {
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <ul className={classes.comments}>
            {/* Render list of comments - fetched from API */}

            {comments.map((comment: Comment) => {
                return (
                    <li key={comment._id}>
                        <p>{comment.text}</p>
                        <div>
                            By <address>{comment.email}</address>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CommentList;
