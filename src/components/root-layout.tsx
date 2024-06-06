import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <Outlet />
      </main>
    </>
  );
}
