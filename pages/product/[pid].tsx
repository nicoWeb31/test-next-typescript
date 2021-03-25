import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import { Product } from "../../interfaces/envent";

interface ProductDetailProps {
    product: Product;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ product }) => {
    if (!product) {
        return <p>loading .....</p>;
    }

    return (
        <Fragment>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </Fragment>
    );
};

const getData = async () => {
    const filePath = path.join(process.cwd(), "data", "dummy.json");

    const jsonData = await fs.readFile(filePath);
    const { products } = JSON.parse(jsonData.toString());
    return products;
};

export async function getStaticProps(context: any) {
    const { params } = context;
    const productId = params.pid;

    const products = await getData();
    const product = products.find((prod: Product) => prod.id === productId);

    if(!product){
        return { notFound : true };
    }

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const products: [] = await getData();
    const ids = products.map((product: Product) => product.id);

    const pathWithParams = ids.map((id: string) => {
        return {
            params: { pid: id },
        };
    });

    return {
        paths: pathWithParams,
        fallback: true,
    };
}

export default ProductDetailPage;
