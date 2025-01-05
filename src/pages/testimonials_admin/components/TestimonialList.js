import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo2 from "../../../assets/imgs/logo2.png";
import dateFormatter2 from "../../../utils/dateFormatter2";

function TestimonailList({ adminTestimonials, onItemClick }) {
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

  const itemDeleteHandler = (testimonial) => {
    
    onItemClick(testimonial);
  };

  return (
    <>
      <tbody className="gridjs-tbody">
        {adminTestimonials.map((adminData) => (
          <tr className="">
            {/* <Link to={`/accounts/users/${testimonial.pk}/detail`}>
              <td
                data-column-id="name"
                className="pl-4 gridjs-tr text-sm decoration-black"
              >
                <div className="flex items-center">
                  <img
                    class="w-8 h-8 rounded"
                    src={profilePic}
                    alt="Default avatar"
                  />{" "}
                  <div className="pl-2">
                    {testimonial.first_name} {testimonial.last_name}
                  </div>
                </div>
              </td>
            </Link> */}

            <td
              data-column-id="name"
              className="gridjs-td text-sm text-smoke font-inter"
            >
              <Link
                to={`/accounts/testimonials/${adminData.pk}/detail`}
                style={{ color: "#DFDFDF" }}
              >
                <div className="flex items-center">
                  <img
                    class="w-8 h-8 rounded"
                    src={logo2}
                    alt="Default avatar"
                  />{" "}
                  <p className="pl-2 font-medium text-smoke">
                    {adminData.client_name}{" "}
                  </p>
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
                  {adminData.client_location}
                </Link>
              </p>
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
                  {adminData.client_message}
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
                {dateFormatter2(adminData.created)}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TestimonailList;
