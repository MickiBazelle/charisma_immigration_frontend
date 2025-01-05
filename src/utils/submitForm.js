import axiosInstance from "../axios";

const submitCharismaForm = ({
  method,
  formData,
  path,
  onResponse,
  onError,
}) => {
  if (method === "POST".toLowerCase()) {
    axiosInstance.post(path, formData).then(onResponse).catch(onError);
  } else if (method === "GET".toLowerCase()) {
    axiosInstance.get(path).then(onResponse).catch(onError);
  }
};

export default submitCharismaForm;
