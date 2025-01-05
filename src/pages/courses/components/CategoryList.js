import { Link } from "react-router-dom";
import logo2 from "./../../../assets/imgs/ci_logo2.png";
import { useForm } from "react-hook-form";
import dateFormatter from "../../../utils/dateFormatter";

function CategoryList({ categories, onItemClick }) {
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

  // function formatDate(date) {
  //   const yourDate = Date(date).toLocaleString("en-US", options);

  //   return yourDate.split("GMT")[0];
  // }

  const itemDeleteHandler = (category) => {
    onItemClick(category);
  };

  return (
    <>
      <tbody className="gridjs-tbody">
        {categories.map((category) => (
          <tr>
            <td data-column-id="id" className="pl-4 gridjs-tr">
              {category.pk}
            </td>
            <td data-column-id="title" className="gridjs-td">
              <p
                class="text-truncate font-size-14 text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {category.title}
              </p>
            </td>
            <td data-column-id="description" className="gridjs-td text-smoke">
              <p
                class="text-truncate font-size-14 text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "300px",
                  fontWeight: "500",
                }}
              >
                {category.description}
              </p>
            </td>
            <td data-column-id="created_by" className="gridjs-td text-smoke">
              <p
                className="text-truncate font-size-14 text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {dateFormatter(category.created)}
              </p>
            </td>

            <td data-column-id="created_on" className="gridjs-td">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <Link
                    href=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                    class="px-2 text-primary"
                  >
                    <i class="bx bx-pencil font-size-18"></i>
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link
                    href=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Delete"
                    class="px-2 text-danger"
                  >
                    <i
                      class="bx bx-trash-alt"
                      onClick={handleSubmit(itemDeleteHandler)}
                    ></i>
                  </Link>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default CategoryList;
