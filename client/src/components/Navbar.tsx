import { Link } from "react-router-dom";
import ChatNav from "./ChatNav";

const items = ['dashboard', 'back'];

function Navbar() {

  return (
    <div className="navbar bg-base-100">
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
      </div>
      <div className="navbar-end">
        <Link to="/favorite" className="btn btn-ghost btn-circle">
          <i className="fa-regular fa-heart fa-lg" />
        </Link>

        <ChatNav items={items}/>
        <Link to="/" className="btn btn-primary normal-case text-lg mx-4">
          ลงขาย
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
