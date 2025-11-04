import type React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Navigate, useLocation } from "react-router-dom";

interface providerProps {
  children: React.ReactNode;
}

const LoginProvider = ({ children }: providerProps) => {
  const { pathname } = useLocation();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  const publicPaths = ["/auth/login", "/auth/register", "/auth/forget" , '/' , '/faq' , "/aboutus" , "/contactus"];

  const isPublic = publicPaths.includes(pathname);

  if (isPublic) {
    return <>{children}</>;
  }

  if (!isLogin) {
    return <Navigate to="/auth/login" replace />;
  } 
  else {
    return <>
    {children}
    </>
  }
};

export default LoginProvider;
