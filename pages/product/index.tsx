import React from "react";
import { Product } from "../../interfaces/envent";


interface IndexProps {
products : Product[];
}


const index : React.FC<IndexProps>= ({products}) => {
    return (
        <div>
            <h1>ProductList</h1>
            <ul>
                {products.map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
        </div>
    );
};

export async function getStaticProps(){
    return { props : {
        products :[{id : 'p1', title: 'Product List 1',}]
    }};
}

export default index;
