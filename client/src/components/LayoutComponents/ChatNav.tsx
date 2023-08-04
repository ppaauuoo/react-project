import { Link } from "react-router-dom";

interface ChatProp {
  items: string[];
}

function ChatNav(props: ChatProp) {
  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <i className="fa-regular fa-comment fa-lg" />
          <span className="badge badge-xs badge-primary indicator-item invisible sm:visible" />
        </div>
      </button>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 text-neutral">
        {props.items.map((item) => (
          <li key={item}>
            <Link to={`/chat/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatNav;
