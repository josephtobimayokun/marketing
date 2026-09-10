// Where "Sign In" / "Get Started" send people. Override at build time with
// VITE_CLIENT_APP_URL once the client app has a real production domain.
export const CLIENT_APP_URL = import.meta.env.VITE_CLIENT_APP_URL || "http://localhost:5173";

export const LOGIN_URL = `${CLIENT_APP_URL}/login`;
export const SIGNUP_URL = `${CLIENT_APP_URL}/signup`;
