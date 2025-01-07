import AllCollegeList from "~/pages/AllCollegeList";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "College Booking || All College" },
    { name: "description", content: "Welcome to College Booking Website!" },
  ];
}

export default function AllCollege() {
  return <AllCollegeList />;
}
