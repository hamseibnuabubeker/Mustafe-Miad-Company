import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa"; // Importing an arrow-down icon from React Icons

const Header = () => {
  const router = useRouter();

  // Define the menu items
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Our Products", path: "/products" },
    { label: "Contact us", path: "/contact" },
    { label: "About us", path: "/about" }

  ];

  // Handle navigation
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <header>
      <div className="dropdown">
        <select
          value={router.pathname}
          onChange={(e) => handleNavigation(e.target.value)}
        >
          {menuItems.map((item) => (
            <option key={item.path} value={item.path}>
              {item.label}
            </option>
          ))}
        </select>
        <FaAngleDown className="dropdown-icon" />
      </div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          background: #50575f;
          color: white;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }
        select {
          background-color: #50575f;
          color: white;
          border: none;
          font-size: 16px;
          cursor: pointer;
          padding: 10px 30px 10px 10px; /* Added extra padding for the icon */
          border-radius: 5px;
          appearance: none;
          margin-right: 10px; /* Added margin between select and icon */
        }
        select:hover,
        select:focus {
          outline: none;
          background-color: #3e444b;
        }
        .dropdown-icon {
          position: absolute;
          right: 10px; /* Adjust position to the right */
          font-size: 14px;
        }
      `}</style>
    </header>
  );
};

export default Header;
