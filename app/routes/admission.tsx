import AdmissionPage from "~/pages/Admission";
import type { Route } from "../+types/root";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "College Booking || Admission" },
    { name: "description", content: "Welcome to College Booking Website!" },
  ];
}

export default function Admission() {
  return <AdmissionPage />;
}