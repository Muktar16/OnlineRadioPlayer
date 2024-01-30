import { IoMenuOutline, IoMoon, IoSettingsOutline } from "react-icons/io5";
import { useTheme } from "../../contexts/ThemeContexts";

function AppNavbar() {
  const { toggleTheme } = useTheme();
  return (
    <nav className="bg-primary h-[70px] flex justify-between md:px-4 px-1 items-center">
      {/* nav left elements */}
      <div className="gap-[10px] flex flex-row items-center">
        <IoMenuOutline className="text-[white] w-[30px] h-[40px]" />
        <div className="text-white font-semibold">RadioStation 23</div>
      </div>
      {/* nav right elements */}
      <div className="gap-[10px] flex flex-row">
        <IoSettingsOutline className="text-[white]" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            onClick={toggleTheme}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3">
            <IoMoon className="text-[black] dark:text-[white]" />
          </span>
        </label>
      </div>
    </nav>
  );
}

export default AppNavbar;
