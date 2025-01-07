import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("college", "routes/allCollege.tsx"),
  route("admission", "routes/admission.tsx"),
  route("myCollege", "routes/myCollege.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
] satisfies RouteConfig;
