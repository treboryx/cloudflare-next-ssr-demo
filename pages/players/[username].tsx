import Image from "next/image";
import Head from "next/head";
import { styled } from "@stitches/react";
import { NextPage, NextPageContext } from "next";
import { parsePath } from "../../utils";

const Button = styled("button", {
  backgroundColor: "#10b981",
  borderRadius: "9999px",
  fontSize: "13px",
  color: "black",
  fontWeight: "bold",
  padding: "10px 15px",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#12d695",
  },
});

export async function getServerSideProps(ctx: NextPageContext) {
  const { username } = parsePath("/players/:username", ctx);
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
      data: await fetch(`https://mc-api.com/v1/players/${username}`).then((r) =>
        r.json()
      ),
    },
  };
}

// @ts-ignore
const Page: NextPage = ({ data, text }) => {
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      {/* {data.username ? (
        <>
          <Head>
            <title>{data.username}</title>
            <link
              rel="icon"
              href={`https://skins.mcstats.com/face/${data.uuid}?size=16`}
            />
          </Head>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-4xl font-bold">{data.username}</h1>
            <a
              href={`https://crafty.gg/players/${data.username}`}
              target="_blank"
            >
              <Button>View more</Button>
            </a>
          </div>
        </>
      ) : null} */}
    </>
  );
};

export default Page;
