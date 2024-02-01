import { IoClose } from "react-icons/io5";
import { useDrawer } from "../../contexts/DrawerContext";
import AppMenu from "../AppMenu/AppMenu";
import { useRef, useEffect } from "react";

const MobileDrawer = () => {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      closeDrawer();
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <main
      className={
        "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out block md:hidden" +
        (isDrawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 -translate-x-full")
      }
    >
      <section
        ref={drawerRef}
        className={
          "w-screen max-w-[200px] left-0 absolute bg-white dark:bg-darkBackground h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isDrawerOpen ? " translate-x-0" : " -translate-x-full")
        }
      >
        <article className="relative max-w-[200px] pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="p-5 dark:text-white">RadioStation 23</div>
          <AppMenu />
        </article>

        <div
          className="absolute top-5 right-3 cursor-pointer text-[20px] dark:text-white"
          onClick={closeDrawer}
        >
          <IoClose />
        </div>
      </section>

      <section
        className="max-w-[200px] h-full cursor-pointer"
        onClick={closeDrawer}
      ></section>
    </main>
  );
};

export default MobileDrawer;
