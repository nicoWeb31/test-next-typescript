import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import { Product } from "../../interfaces/envent";

interface ProductDetailProps {
    product: Product;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <Fragment>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </Fragment>
    );
};

export async function getStaticProps(context: any) {
    const { params } = context;
    const productId = params.pid;

    const filePath = path.join(process.cwd(), "data", "dummy.json");
    try {
        const jsonData = await fs.readFile(filePath);
        const { products } = JSON.parse(jsonData.toString());

        const product = products.find((prod: Product) => prod.id === productId);

        return {
            props: {
                product,
            },
        };
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pid: "p1" } },
            { params: { pid: "p2" } },
            { params: { pid: "p3" } },
            { params: { pid: "p4" } },
        ],
        fallback: false,
    };
}

export default ProductDetailPage;
