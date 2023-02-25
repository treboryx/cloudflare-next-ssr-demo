import Link from "next/link";

export default function Players() {
  return (
    <>
      <ul>
        <li>
          <Link href="/players/Notch">Notch</Link>
        </li>
        <li>
          <Link href="/players/R0berto">R0berto</Link>
        </li>
        <li>
          <Link href="/players/TheBroJordan">TheBroJordan</Link>
        </li>
      </ul>
    </>
  );
}
