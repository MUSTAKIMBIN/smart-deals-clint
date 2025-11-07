import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    mustakim: "mustakim",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
