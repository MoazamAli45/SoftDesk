import Event from "@/component/Event/Event";
import SecoundLayout from "@/component/SecoundLayout/SecoundLayout";
import Head from "next/head";
import React from "react";

export default function Events() {
  return (
    <>
    <Head>
        <title>Softdesk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />

      </Head>
      <main>
        <SecoundLayout>
          <Event />
        </SecoundLayout>
      </main>
    </>
  );
}
