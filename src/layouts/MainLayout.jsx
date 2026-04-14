import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container py-12 px-3 flex flex-col gap-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
