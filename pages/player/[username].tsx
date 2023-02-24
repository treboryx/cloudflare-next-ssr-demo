import Image from "next/image";
import Head from "next/head";

export default function Page({ data }: any) {
  return (
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
      </div>
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
