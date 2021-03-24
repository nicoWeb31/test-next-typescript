import React from "react";
import { Product } from "../../interfaces/envent";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";


interface IndexProps {
products : Product[];
}


const index : React.FC<IndexProps>= ({products}) => {
    return (
        <div>
            <h1>ProductList</h1>
            <ul>
                {products.map(product => <li key={product.id}><Link href={`/product/${product.id}`}><a>{product.title}</a></Link></li>)}
            </ul>
        </div>
    );
};


//first executing , no exposed to front side
export async function getStaticProps(){

    const filePath  =  path.join(process.cwd(),'data','dummy.json' )

    try {
        
        const jsonData = await fs.readFile(filePath);
        const {products} = JSON.parse(jsonData.toString());
        return { props : {
            products
        },
        //relidate seconde for recharge fresh data
        revalidate : 30,
    };
        
    } catch (error) {
        console.log(error)
    }
    

}

export default index;
