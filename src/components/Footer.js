import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-green-50">
      <h4 className="p-10 text-center font-bold text-red-500">
        This site is developed by {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default Footer;
