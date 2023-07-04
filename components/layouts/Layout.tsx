import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Martin Perez" />
        <meta name="description" content={`Informacion del pokemon ${title}`} />
        <meta name="keywords" content={`${title},xxxx,pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
