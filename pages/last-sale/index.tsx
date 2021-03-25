import React, { useEffect, useState } from "react";

interface LastSalePageProps {}
interface Albums {
    userId: string;
    id: string;
    title: string;
}

const LastSalePage: React.FC = () => {
    const [album, setAlbum] = useState<Albums[] | null>(null);
    const [isloading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((data) => {
                setAlbum(data);
                setIsLoading(false);
            });
    }, []);

    console.log(album);

    if(!album) {
        return <p>loading...</p>;
    }

    return (
        <ul>
            {album?.map((alb) => {
                return <li key={alb.id}>{alb.title}</li>;
            })}
        </ul>
    );
};

export default LastSalePage;
