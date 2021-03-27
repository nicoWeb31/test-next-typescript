import React, { useRef, useState } from "react";
import axios from "axios";

const TryApi = () => {
    const [feedBacks, setFeedback] = useState([]);

    const emailInputRef = useRef<HTMLInputElement>(null);
    const feedBackInputRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailInputRef.current?.value;
        const text = feedBackInputRef.current?.value;

        const body = { email, text };
        const headers = { headers: { "Content-Type": "application/json" } };

        const response = await axios.post(
            "/api/feedBack",
            JSON.stringify(body),
            headers
        );
        console.log(response);
    };

    const handleFetchData = async () => {
        const { data } = await axios.get("/api/feedBack");
        console.log(data.feedBack);
        setFeedback(data.feedBack);
    };

    return (
        <div>
            <h1>Try Api </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailInputRef}
                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="feedBack">Your Feddback</label>
                    <textarea
                        id="feedBack"
                        rows={5}
                        ref={feedBackInputRef}
                        name="text"
                    ></textarea>
                </div>
                <button>send feedBack</button>
            </form>

            <hr/>

            <div>
                <h3 className="center">load feedBack </h3>
                <div className="center">
                    <button onClick={handleFetchData}>clik</button>
                </div>
                <ul>
                    {feedBacks.map((feedBack: any) =><li key={feedBack.id}>{feedBack.text}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default TryApi;
