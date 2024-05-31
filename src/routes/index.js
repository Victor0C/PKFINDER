import React, { useEffect } from "react";
import {
  useAuth,
} from "../context/AuthContextProvider";
import Loading from "../pages/Loading";
import { UnauthRoutes } from "./unauth.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
  const {signed, loading, checkAuth, checkAuthentication} = useAuth();

  useEffect(() => {!checkAuth && checkAuthentication()}, []);

  if (loading) {
    return <Loading />;
  }
  
  return signed ? <UserRoutes /> : <UnauthRoutes />;
}
