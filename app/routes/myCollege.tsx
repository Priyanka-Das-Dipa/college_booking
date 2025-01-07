import MyCollegePage from "~/pages/MyCollegePage";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "College Booking || My College" },
    { name: "description", content: "Welcome to College Booking Website!" },
  ];
}

export default function Admission() {
  return <MyCollegePage />;
}
