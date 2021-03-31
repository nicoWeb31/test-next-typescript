import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import Notification from "../components/ui/notification/Notification"
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Head>
                    <title>general title</title>
                    <meta name="description" content="general description" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0 "/>
                </Head>
                <Notification title='test' message='test' status='fail'/>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
