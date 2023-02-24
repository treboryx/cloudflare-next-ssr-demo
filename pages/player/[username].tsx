import Image from "next/image";
import Head from "next/head";
import { styled } from "@stitches/react";

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

export default function Page({ data }: { data: any }) {
  return (
    <>
      {data.username ? (
        <>
          <Head>
            <title>{data.username}</title>
            <link
              rel="icon"
              href={`https://skins.mcstats.com/face/${data.uuid}?size=16`}
            />
          </Head>
          <div className="flex justify-center flex-col items-center">
            <Image
              width={316}
              height={512}
              src={`https://skins.mcstats.com/body/front/${data.uuid}`}
              alt={`${data.username}'s Skin`}
            />
            <h1 className="text-4xl font-bold">{data.username}</h1>
            <a
              href={`https://crafty.gg/players/${data.username}`}
              target="_blank"
            >
              <Button>View more</Button>
            </a>
          </div>
        </>
      ) : null}
    </>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { username: string };
}) {
  const data = await fetch(
    `https://mc-api.com/v1/players/${params.username}`
  ).then((r) => r.json());
  return { props: { data } };
}

export const config = {
  runtime: "experimental-edge",
};
