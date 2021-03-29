import classes from "./newsletter-registration.module.scss";
import React, { useState } from "react";
import axios from "axios";

const NewsletterRegistration: React.FC = () => {
    const [email, setEmail] = useState("");

    async function registrationHandler(event: React.FormEvent) {
        event.preventDefault();

        const headers = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            "/api/newsletter",
            { email },
            headers
        );
        console.log(data.message);
        setEmail("");
    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        placeholder="Your email"
                        aria-label="Your email"
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
};

export default NewsletterRegistration;
