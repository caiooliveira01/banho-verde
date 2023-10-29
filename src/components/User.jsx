import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";

export default function User() {
  const { user, logoutUser } = useAuth();

  function getFormattedFirstName() {
    if (user && user.name) {
      const nameParts = user.name.split(' ');
      if (nameParts.length > 0) {
        return nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
      }
    }
    return ''; // Return an empty string if the user name is not available.
  }

  return (
    <div className="text-lg font-medium flex items-center justify-center gap-4 flex-col sm:flex-row">
      {user ? (
        <>
          <p>Bem vindo(a), {getFormattedFirstName()}</p>
          <button
            className="text-base bg-red-600 rounded flex items-center justify-center py-1 px-3 gap-2 hover:bg-red-500"
            onClick={logoutUser}
          >
            <PiSignOutBold />
            Sair
          </button>
        </>
      ) : (
        <Link to="/login">
          <button
            className="text-base bg-darkgreen rounded flex items-center justify-center py-1 px-3 gap-2 hover:bg-green-900"
          >
            Login
          </button>
        </Link>
      )}
    </div>
  );
}
