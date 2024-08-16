import { Navigate } from "react-router-dom";

export default function PrivateRoute({ Component, fallBackPath, isAllowed }) {
  if (!!isAllowed) {
    return <Navigate to={fallBackPath} />;
  }
  return Component;
}
