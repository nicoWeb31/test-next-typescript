import React, { useEffect, useState } from "react";
import useSWR from 'swr';

interface LastSalePageProps {}
interface Album {
    userId: string;
    id: string;
    title: string;
}

const LastSalePage: React.FC = () => {
    // const [album, setAlbum] = useState<Albums[] | null>(null);
    // const [isloading, setIsLoading] = useState<boolean>(false);


    const {data, error} =useSWR("https://jsonplaceholder.typicode.com/albums");



    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch("https://jsonplaceholder.typicode.com/albums")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setAlbum(data);
    //             setIsLoading(false);
    //         });
    // }, []);

    // console.log(album);

    if(error) {
        console.log(error)
    }

    if(!data) {
        return <p>loading...</p>;
    }

    return (
        <ul>
            {data?.map((alb: Album) => {
                return <li key={alb.id}>{alb.title}</li>;
            })}
        </ul>
    );
};

export default LastSalePage;
