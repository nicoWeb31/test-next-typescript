import React, { useEffect, useState } from "react";
import useSWR from "swr";

interface LastSalePageProps {
    albums: Album[];
}
interface Album {
    userId: string;
    id: string;
    title: string;
}

const LastSalePage: React.FC<LastSalePageProps> = ({ albums }) => {
    const [album, setAlbum] = useState<Album[] | null>(albums);
    // const [isloading, setIsLoading] = useState<boolean>(false);

    const { data, error } = useSWR(
        "https://jsonplaceholder.typicode.com/albums"
    );

    useEffect(() => {
        setAlbum(data);
    }, []);

    if (error) {
        console.log(error);
    }

    if (!data && !album) {
        return <p>loading...</p>;
    }

    return (
        <ul>
            {albums?.map((alb: Album) => {
                return <li key={alb.id}>{alb.title}</li>;
            })}
        </ul>
    );
};

export async function getStaticProps() {
    return fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((data) => {
            return {
                props: { albums: data },
                revalidate: 15,
            };
        });
}

export default LastSalePage;
