import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createJazzReactApp,
  DemoAuthBasicUI,
  useDemoAuth,
  // DemoAuthBasicUI
} from "jazz-react";
// import { BrowserDemoAuth } from "jazz-browser";

const Jazz = createJazzReactApp();
export const { useAccount, useCoState } = Jazz;

function JazzAndAuth({ children }: { children: React.ReactNode }) {
  const [auth, authState] = useDemoAuth();
  console.log(authState, JSON.parse(JSON.stringify(authState)));
  return (
    <>
      <Jazz.Provider
        auth={auth}
        // replace `you@example.com` with your email as a temporary API key
        peer="wss://cloud.jazz.tools/?key=benstoffel51@gmail.com"
      >
        {children}
      </Jazz.Provider>

      {authState.state === "signedIn" ? (
        <button
          onClick={() => {
            // BrowserDemoAuth.signOut();
            (authState as { logOut: () => void }).logOut();
            window.location.reload();
            // authState.logOut();
          }}
        >
          Sign out
        </button>
      ) : (
        <DemoAuthBasicUI appName="1024 pixels" state={authState} />
      )}
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JazzAndAuth>
      <App />
    </JazzAndAuth>
  </React.StrictMode>
);
