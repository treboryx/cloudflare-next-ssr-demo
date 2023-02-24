import React from "react";
import Link from "next/link";

export default function Players() {
  return (
    <>
      <ul>
        <li>
          <Link href="/player/Notch">Notch</Link>
        </li>
        <li>
          <Link href="/player/R0berto">R0berto</Link>
        </li>
        <li>
          <Link href="/player/TheBroJordan">TheBroJordan</Link>
        </li>
      </ul>
    </>
  );
}
