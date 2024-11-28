import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
// import { createJazzReactApp, DemoAuthBasicUI, useDemoAuth } from "jazz-react";
import InfiniteCanvas from "./InfiniteCanvas";

// const Jazz = createJazzReactApp();
// export const { useAccount, useCoState } = Jazz;

// function JazzAndAuth({ children }: { children: React.ReactNode }) {
//   const [auth, authState] = useDemoAuth();

//   return (
//     <>
//       <Jazz.Provider
//         auth={auth}
//         // replace `you@example.com` with your email as a temporary API key
//         peer="wss://cloud.jazz.tools/?key=benstoffel51@gmail.com"
//       >
//         {children}
//       </Jazz.Provider>

//       {authState.state === "signedIn" ? (
//         <button
//           onClick={() => {
//             // BrowserDemoAuth.signOut();
//             (authState as { logOut: () => void }).logOut();
//             window.location.reload();
//             // authState.logOut();
//           }}
//         >
//           Sign out
//         </button>
//       ) : (
//         <DemoAuthBasicUI appName="1024 pixels" state={authState} />
//       )}
//     </>
//   );
// }

// document.addEventListener(
//   "touchmove",
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InfiniteCanvas />
    {/* <JazzAndAuth>
      <App />
    </JazzAndAuth> */}
  </React.StrictMode>
);
