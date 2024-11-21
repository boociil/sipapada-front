import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AdminRoutes = () => {
  const [cookies] = useCookies(['isLogin']);

  return (cookies.role === 0) ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoutes;