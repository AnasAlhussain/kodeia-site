import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingLinesBackground from "../react-bits/FloatingLinesBackground";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative ">
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <FloatingLinesBackground />
      </div>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 flex-grow z-10 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
