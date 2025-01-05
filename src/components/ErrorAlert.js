import classes from "./ErrorAlert.module.css";

function ErrorAlert({ response, onClicked }) {
  return (
    <div>
      {response ? (
        <div
          className={`alert alert-danger ${classes.alert_dismissible} fade show`}
          role="alert"
        >
          <svg
            className={`mdi mdi-block-helper me-2 mb-1  ${classes.alert_error}`}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            onClick={onClicked}
          >
            <path
              fill="currentColor"
              d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
            />
          </svg>

          {response ? response.data["detail"] : "none"}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ErrorAlert;
