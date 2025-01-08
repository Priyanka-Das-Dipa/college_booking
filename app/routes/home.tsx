import type { Route } from "./+types/home";
import Banner from "~/components/home/Banner";
import Gallery from "~/components/home/Gallery";
import Research from "~/components/home/Research";
import Review from "~/components/home/Review";
// import Review from "~/components/home/Review";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "College Booking || Home" },
    { name: "description", content: "Welcome to College Booking Website!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <Banner />
        <Research />
        <Gallery />
        <Review />
      </div>
    </>
  );
}
