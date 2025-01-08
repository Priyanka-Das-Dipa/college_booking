import type { Route } from "./+types/home";
import Banner from "~/components/home/Banner";
import Gallery from "~/components/home/Gallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "College Booking || Home" },
    { name: "description", content: "Welcome to College Booking Website!" },
  ];
}

export default function Home() {
  return (
    <>
      <Banner />
      <Gallery/>
    </>
  );
}
