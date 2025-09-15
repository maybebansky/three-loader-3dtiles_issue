import type { Route } from "./+types/home";
import Render from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MyTimes three-loader-3dtiles" }];
}

export default function Home() {
  return <Render />;
}
