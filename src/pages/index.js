import Advisor from "@/component/Advisor/Advisor";
import Cabinet from "@/component/Cabinet/Cabinet";
import Heads from "@/component/Heads/Heads";
import About from "@/component/About/About";
import Previous from "@/component/Previous/Previous";
import Layout from "@/component/Layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main>
        {/*  Layout */}
        <Layout>
          <About />
          <Advisor />
          <Cabinet />
          <Heads />
          <Previous />
        </Layout>
      </main>
    </>
  );
}
