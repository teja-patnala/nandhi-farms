import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";



export default function ProtectedRoute({children}){
  const {currentUser} = useAuth();
  return currentUser!==null ? <>{children}</> : <Navigate to = "/login"/>
};


