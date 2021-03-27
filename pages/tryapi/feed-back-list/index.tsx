import React,{useState} from "react";
import { Feedback } from "../../../interfaces/envent";
import feedBack, { feedBackPath, extractFeedback } from "../../api/feedBack";
import axios from "axios";




interface feedbackPageProps {
    feedbacks: Feedback[];
}

const feedbackPage: React.FC<feedbackPageProps> = ({ feedbacks }) => {

    const [feedback,setFeedback] = useState<Feedback>();

    const hadleMoreDetails = async(id: string)=>{
        const {data} = await axios.get(`/api/${id}`);
        const feedbackSelect = data.feedback;
        setFeedback(feedbackSelect);
        console.log(feedback);
    }


    return (
        <div>
            <h2>list feedback</h2>
            <ul>
                <ul>
                    {feedbacks.map((feedBack: Feedback) => (
                        <li key={feedBack.id}>{feedBack.text} <button onClick={()=>hadleMoreDetails(feedBack.id)}>more..</button></li>
                    ))}
                </ul>
            </ul>

            <h3>more</h3>
            
            {feedback && <p>{feedback.email}</p>}
            

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
