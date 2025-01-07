import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "College Booking || Home" },
    { name: "description", content: "Welcome to College Booking Website!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
