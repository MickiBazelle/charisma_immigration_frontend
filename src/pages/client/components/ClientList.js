import { Link } from "react-router-dom";
import logo2 from "../../../assets/imgs/logo2.png";
import { useForm } from "react-hook-form";
import dateFormatter from "../../../utils/dateFormatter";

function ClientList({ adminClients, onItemClick }) {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const itemDeleteHandler = (user) => {
    onItemClick(user);
  };

  return (
    <>
      <tbody className="gridjs-tbody">
        {adminClients.map((adminData, index) => (
          <tr key={index} className="text-smoke">
            <td data-column-id="email" className="gridjs-td text-sm text-smoke">
              <Link
                to={`/accounts/clients/${adminData.id}/profile`}
                style={{ color: "#DFDFDF" }}
              >
                <div className="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={logo2}
                    alt="Default avatar"
                  />{" "}
                  <div className="pl-4 text-smoke" style={{ color: "#DFDFDF" }}>
                    {adminData.user.first_name} {adminData.user.last_name}
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
                  {adminData.user.email}
                </Link>
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
                {dateFormatter(adminData.created)}
              </p>
            </td>

            <td data-column-id="status" className="gridjs-td text-sm">
              {adminData.user.is_active ? (
                <span class="badge bg-success text-center">
                  <p className="text-white">Active</p>
                </span>
              ) : (
                <span class="badge bg-danger">
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

export default ClientList;
