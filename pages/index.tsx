import type { NextPage } from "next";
import Head from "next/head";

import { headingStyle } from "./style";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className={headingStyle}>Home Page</h1>
    </div>
  );
};

export default Home;
