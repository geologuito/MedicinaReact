import { useState, useMemo } from "react";
import { AuthContext } from "./AuthContext";

const HARDCODE_USER = "juan";
const HARDCODE_PASS = "1234";

export default function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);

  const value = useMemo(() => ({
    isAuthed,

    login: (user, pass) => {
      const ok = user === HARDCODE_USER && pass === HARDCODE_PASS;
      setIsAuthed(ok);
      return ok;
    },

    logout: () => {
      setIsAuthed(false);
    }

  }), [isAuthed]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}