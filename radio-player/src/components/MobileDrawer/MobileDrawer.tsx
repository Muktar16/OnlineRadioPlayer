import { useDrawer } from "../../contexts/DrawerContext";

const MobileDrawer = () => {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  return (
    <main
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out block md:hidden" +
        (isDrawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isDrawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {/* <AppSider/> */}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={closeDrawer}
      ></section>
    </main>
  );
};

export default MobileDrawer;
