import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("admission", "routes/admission.tsx"),
    route("college", "routes/myCollege.tsx"),


] satisfies RouteConfig;
