import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface DrawerProps {
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay " />
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <li>
              <Link to="/" className="btn btn-ghost normal-case text-lg mx-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="btn btn-ghost normal-case text-lg mx-4">
                เข้าสู่ระบบ / สมัครสมาชิก
              </Link>
            </li>
            <li>
              <Link
                to="/todo"
                className="btn btn-ghost normal-case text-lg mx-4"
              >
                Todo
              </Link>
            </li>
            <li>
              <Link
                to="/record"
                className="btn btn-ghost normal-case text-lg mx-4"
              >
                Record
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="btn btn-ghost normal-case text-lg mx-4"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
