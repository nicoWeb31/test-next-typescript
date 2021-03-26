import { ImageProps } from "next/image";

export interface Event {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: any;
    isFeatured: boolean;
}

export interface Product {
    id: string;
    title: string;
    description: string;
}
