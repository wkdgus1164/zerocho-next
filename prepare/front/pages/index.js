import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>HOME | NodeBird</title>
            </Head>
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
}

export default Home;