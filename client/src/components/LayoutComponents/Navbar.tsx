import { Link } from "react-router-dom";

const items = ["dashboard", "back"];

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-ghost normal-case text-lg"
      onClick={() => loginWithRedirect()}
    >
      เข้าสู่ระบบ
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-ghost normal-case text-lg"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      ออกจากระบบ
    </button>
  );
};

function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navbar bg-red-500 text-white">
      <div className="flex-none sm:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      <div className="navbar-start">
        <p className="normal-case text-xl mr-4">MeeKong</p>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-lg hidden sm:flex"
        >
          Home
        </Link>
        <Link
          to="/todo"
          className="btn btn-ghost normal-case text-lg hidden sm:flex"
        >
          Todo
        </Link>
        <Link
          to="/record"
          className="btn btn-ghost normal-case text-lg hidden sm:flex"
        >
          Record
        </Link>
        <div className="dropdown dropdown-hover hidden sm:flex">
          <label tabIndex={0} className="btn btn-ghost normal-case text-lg">
            Hover <i className="fa-solid fa-caret-down" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-red-500 rounded-box w-52 text-lg "
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link to="/favorite" className="btn btn-ghost btn-circle">
          <i className="fa-regular fa-lg fa-heart" />
        </Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}

export default Navbar;
