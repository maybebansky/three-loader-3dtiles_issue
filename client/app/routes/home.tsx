import type { Route } from "./+types/home";
import Render from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "3DTilesRendererJS  rendering issue" }];
}

export default function Home() {
  return <Render />;
}
