import React from "react";
import { feedBackPath, extractFeedback } from "../../api/feedBack";

export interface Feedback {
    id: string;
    email: string;
    text: string;
}

interface feedbackPageProps {
    feedbacks: Feedback[];
}

const feedbackPage: React.FC<feedbackPageProps> = ({ feedbacks }) => {
    return (
        <div>
            <h2>list feedback</h2>
            <ul>
                <ul>
                    {feedbacks.map((feedBack: Feedback) => (
                        <li key={feedBack.id}>{feedBack.text}</li>
                    ))}
                </ul>
            </ul>
        </div>
    );
};

//no call local api, logic direct here
export const getStaticProps = async () => {
    const path = feedBackPath();
    const data = extractFeedback(path);

    return { props: { feedbacks: data }, revalidate : 1000};
};

export default feedbackPage;
