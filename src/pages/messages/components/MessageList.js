import { Link } from "react-router-dom";

import dateFormatter from "../../../utils/dateFormatter";
import dateFormatter2 from "../../../utils/dateFormatter2";
import logo2 from "../../../assets/imgs/logo2.png";

function AdminMessageList({ messages, onItemClick }) {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const itemDeleteHandler = (message) => {
    
    onItemClick(message);
  };

  return (
    <>
      <tbody className="gridjs-tbody">
        {messages.map((message) => (
          <tr className="">
            <td data-column-id="email" className="gridjs-td text-sm text-smoke">
              <Link
                to={`/accounts/messages/${message.pk}/detail`}
                style={{ color: "#DFDFDF" }}
              >
                <div className="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={logo2}
                    alt="Default avatar"
                  />{" "}
                  <div className="pl-2">
                    {message.first_name} {message.last_name}
                  </div>
                </div>
              </Link>
            </td>

            <td data-column-id="email" className="gridjs-td text-sm text-smoke">
              <p
                class="text-truncate text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                <Link
                  href=""
                  class="text-smoke"
                  style={{ textDecoration: "none" }}
                >
                  {message.email}
                </Link>
              </p>
            </td>

            <td
              data-column-id="phone_number"
              className="gridjs-td text-sm text-smoke"
            >
              <p
                className="text-truncate text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {message.phone_number}
              </p>
            </td>

            <td
              data-column-id="message"
              className="gridjs-td text-sm text-smoke"
            >
              <p
                className="text-truncate text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {message.message}
              </p>
            </td>

            <td
              data-column-id="created_on"
              className="gridjs-td text-sm text-smoke"
            >
              <p
                className="text-truncate text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {dateFormatter2(message.created)}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default AdminMessageList;
