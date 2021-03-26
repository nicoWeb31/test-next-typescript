import React, {useRef} from "react";
import axios from "axios";

const TryApi = () => {

    const emailInputRef = useRef<HTMLInputElement>(null);
    const feedBackInputRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = async (e :React.FormEvent)=>{
        e.preventDefault();
        const email = emailInputRef.current?.value;
        const text = feedBackInputRef.current?.value;

        const body = {email, text};
        const headers = {headers : {'Content-Type': 'application/json'}};

        const response = await axios.post('/api/feedBack',JSON.stringify(body),headers);
        console.log(response)
    }

    return (
        <div>
            <h1>Try Api </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" ref={emailInputRef} name="email"/>
                </div>
                <div>
                    <label htmlFor="feedBack">Your Feddback</label>
                    <textarea id="feedBack"  rows={5} ref={feedBackInputRef} name="text"></textarea>
                </div>
                <button>send feedBack</button>
            </form>
        </div>
    );
};

export default TryApi;
