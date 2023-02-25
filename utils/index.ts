import { NextPageContext } from "next";
import { URLPattern } from "next/server";

export function parsePath(pathname: string, ctx: NextPageContext): any {
  const pattern = new URLPattern({ pathname });
  const result = pattern.exec(`http://host${ctx.req?.url}`);

  return result?.pathname.groups || {};
}
