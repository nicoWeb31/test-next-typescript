import Document, { Html, Head, Main, NextScript } from "next/document";


//by default structure .
// class MyDocument extends Document {
//     render() {
//         return (
//             <Html>
//                 <Head>
//                     <body>
//                         <Main />
//                         <NextScript />
//                     </body>
//                 </Head>
//             </Html>
//         );
//     }
// }


// export default MyDocument;


class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head>
                    <body>
                        <div className="overlay"></div>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}


export default MyDocument;