import React, { ReactNode } from 'react';

interface DrawerProps {
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
			{children}
		</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay " />
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <li>
              <a href="/" className="btn btn-ghost normal-case text-lg mx-4">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="btn btn-ghost normal-case text-lg mx-4">
                เข้าสู่ระบบ / สมัครสมาชิก
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
