import "../styles/global.css";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../data/context/AppContext";
import { AuthProvider } from "../data/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
