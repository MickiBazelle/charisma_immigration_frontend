import { Link } from "react-router-dom";
import logo2 from "./../../../assets/imgs/ci_logo2.png";
import { useForm } from "react-hook-form";
import dateFormatter from "../../../utils/dateFormatter";

function UserList({ adminUsers, onItemClick }) {
  return (
    <>
      <tbody className="gridjs-tbody">
        {adminUsers.map((adminData) => (
          <tr className="">
            <td
              data-column-id="email"
              className="gridjs-td text-sm text-smoke font-inter"
            >
              <Link
                to={`/accounts/users/${adminData.id}/detail`}
                style={{ color: "#DFDFDF" }}
              >
                <div className="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={logo2}
                    alt="Default avatar"
                  />{" "}
                  <div className="pl-4 font-inter">
                    {adminData.user.first_name} {adminData.user.last_name}
                  </div>
                </div>
              </Link>
            </td>

            <td
              data-column-id="email"
              className="gridjs-td text-sm text-smoke font-inter"
            >
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
                  {adminData.user.email}
                </Link>
              </p>
            </td>

            <td
              data-column-id="created_on"
              className="gridjs-td text-sm text-smoke font-inter"
            >
              <p
                className="text-truncate text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {dateFormatter(adminData.created)}
              </p>
            </td>

            <td data-column-id="status" className="gridjs-td text-sm">
              {adminData.user.is_active ? (
                <span class="badge bg-success text-center font-inter">
                  <p className="text-white">Active</p>
                </span>
              ) : (
                <span class="badge bg-danger font-inter">
                  <p className="text-white">Inactive</p>
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default UserList;
