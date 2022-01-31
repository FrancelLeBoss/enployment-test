import * as React from 'react';
import Head from "next/head";
import Form from "../pages/form";
import {useRouter} from "next/router";

const Home = () => {
    return (
        <div>
         <Head>
          <title>Calcul de l'IMC</title>
          <link rel="icon" href="/favicon.ico" />
         </Head>
            <Form/>
        </div>
    );
};

export default Home