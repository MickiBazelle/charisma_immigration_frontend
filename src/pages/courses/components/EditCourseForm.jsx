import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Button, Icon } from "semantic-ui-react";
import { createTheme } from "semantic-ui-react";

import { Link } from "react-router-dom";

// import UserData from "../plugin/UserData";
import Swal from "sweetalert2";
import axiosInstance from "../../../axios";
import { useForm } from "react-hook-form";

function EditCourseForm({ onFormSubmit, isLoading, module }) {
  const [course, setCourse] = useState({
    intro_video: "",
    image: "",
    title: "",
    description: "",
    module_status: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [contentVideo, setContentVideo] = useState(null);

  const [progress, setProgress] = useState(0);
  const [ckEdtitorData, setCKEditorData] = useState("");

  const [contents, setContents] = useState([
    {
      title: "",
      description: "",
      video_file: "",
      is_preview: false,
    },
    // {
    //   items: [
    //     {
    //       title: "",
    //       description: "",
    //       videoPreview: "",
    //       video_file: "",
    //       is_preview: false,
    //     },
    //   ],
    // },
  ]);

  const handleCourseInputChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleCkEditorChange = (event, editor) => {
    const data = editor.getData();
    setCKEditorData(data);
  };

  const handleCourseImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourse({
          ...course,
          image: {
            file: reader.result, //event.target.files[0],
            preview: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCourseIntroVideoChange = (event) => {
    // [event.target.name]: event.target.files[0],
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourse({
          ...course,
          video: {
            file: reader.result, //event.target.files[0],
            preview: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (index, propertyName, value) => {
    const updatedContents = [...contents];

    updatedContents[index][propertyName] = value;
    const video_file = value;
    if (video_file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContentVideo({
          ...contentVideo,
          video: {
            file: reader.result,
            preview: reader.result,
          },
        });
      };
      reader.readAsDataURL(video_file);
    }
    setContents(updatedContents);
  };

  const handlePreviewChange = (index, propertyName, value) => {};

  const handleItemChange = (
    contentIndex,
    itemIndex,
    propertyName,
    value,
    type
  ) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].items[itemIndex][propertyName] = value;
    const file = value;
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContentVideo({
          ...contentVideo,
          video: {
            vid: file,
            preview: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
    setContents(updatedContents);
  };

  const addContent = () => {
    setContents([
      ...contents,
      {
        title: "",
        description: "",
        video_file: "",
        is_preview: false,
        // items: [{ title: "", description: "", file: "", preview: false }],
      },
    ]);
  };

  const removeContent = (index) => {
    const updatedContents = [...contents];
    updatedContents.splice(index, 1);
    setContents(updatedContents);
  };

  const addItem = (contentIndex) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].items.push({
      title: "",
      description: "",
      video_file: "",
      is_preview: false,
    });

    setContents(updatedContents);
  };

  const removeItem = (contentIndex, itemIndex) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].items.splice(itemIndex, 1);
    setContents(updatedContents);
  };

  const handleFormDataSubmit = async (e) => {
    // e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", course.title);
    formdata.append("thumbnail", course.image.file);
    // formdata.append("intro_video", course.intro_video);
    formdata.append("overview", ckEdtitorData);

    if (course.video !== null || course.video !== "") {
      formdata.append("intro_video", course.video.file || "");
    }

    contents.forEach((content, contentIndex) => {
      Object.entries(content).forEach(([key, value]) => {
        // formdata.append(`contents[${contentIndex}][${key}]`, String(value));
        if (key !== "video_file") {
          if (key !== "file") {
            formdata.append(`contents[${contentIndex}][${key}]`, String(value));
          } else {
            formdata.delete(key);
          }
        } else {
          const vid = content.video_file;
          if (vid instanceof File) {
            // formdata.append(`contents[${contentIndex}][${key}]`, String(value));
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //   setContentVideo({
            //     ...contentVideo,
            //     video: {
            //       file: reader.result,
            //       preview: reader.result,
            //     },
            //   });
            // };
            // reader.readAsDataURL(file);
            formdata.append(
              `contents[${contentIndex}][${key}]`,
              contentVideo.video.file
            );
            // formdata.append(`contents[video_file]`, contentVideo.video.file);
          } else {
          }
        }
      });

      // content.items.forEach((item, itemIndex) => {
      //   Object.entries(item).forEach(([itemKey, itemValue]) => {
      //     formdata.append(
      //       `contents[${contentIndex}][items][${itemIndex}][${itemKey}]`,
      //       itemValue
      //     );
      //   });
      // });
    });

    onFormSubmit(formdata);
    // const formDataObj = {};
    // formdata.forEach((value, key) => {
    //   formDataObj[key] = value;
    // });
  };

  // const onSubmit = (data) => {
  //   onFormSubmit(formData);
  // };

  return (
    <div className="">
      <Form
        className="overflow-auto"
        onSubmit={handleSubmit(handleFormDataSubmit)}
      >
        <section className="py-4 py-lg-6 bg-primary rounded-3">
          <div className="container">
            <div className="flex flex-row">
              <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
                <div className="d-lg-flex align-items-center justify-content-between">
                  {/* Content */}
                  <div className="mb-4 mb-lg-0">
                    <h1 className="text-white mb-1">Add New Module</h1>
                    <p className="mb-0 text-white lead">
                      Just fill the form and create your courses.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-8 mt-5">
          <div className="card mb-3 pl-5 pt-2 pr-5">
            {/* Basic Info Section */}
            <div className="card-header border-bottom px-4 py-3">
              <h4 className="mb-0">Basic Information</h4>
            </div>
            <div className="card-body">
              <label htmlFor="courseTHumbnail" className="form-label">
                Thumbnail Preview
              </label>
              <img
                style={{
                  width: "100%",
                  height: "330px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                className="mb-4"
                src={
                  course.image.preview ||
                  "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                }
                alt=""
              />
              <div className="mb-3">
                <Form.Field>
                  <label htmlFor="courseTHumbnail" className="form-label">
                    Module Thumbnail
                  </label>
                  <input
                    id="courseTHumbnail"
                    className="form-control"
                    type="file"
                    name="image"
                    onChange={handleCourseImageChange}
                  />
                </Form.Field>
              </div>
              <div className="mt-4">
                <Form.Field>
                  <label htmlFor="courseTHumbnail" className="form-label">
                    Intro Video Preview
                  </label>
                  {course.video ? (
                    <video
                      controls
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      className="mb-4 shadow-md"
                      src={
                        course.video.preview ||
                        "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                      }
                      alt=""
                    />
                  ) : (
                    <img
                      style={{
                        width: "100%",
                        height: "330px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      className="mb-4"
                      src={
                        "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                      }
                      alt=""
                    />
                  )}
                </Form.Field>
              </div>
              <div className="mb-3">
                <label htmlFor="courseTitle" className="form-label">
                  Intro Video
                </label>
                <input
                  id="introvideo"
                  className="form-control"
                  type="file"
                  name="file"
                  onChange={handleCourseIntroVideoChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="courseTitle" className="form-label">
                  Title
                </label>
                <input
                  id="moduleTitle"
                  className="form-control"
                  type="text"
                  placeholder=""
                  name="title"
                  onChange={handleCourseInputChange}
                />
                <small>Write a 60 character course title.</small>
              </div>

              <div className="mb-3">
                <label className="form-label">Module Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={ckEdtitorData}
                  onChange={handleCkEditorChange}
                  style={{ height: "400px" }}
                  name="description"
                  value={course.description || ""}
                />
                <small>A brief summary of your courses.</small>
              </div>
            </div>

            {/* Content Section */}
            <div className="card-header border-bottom px-4 py-3">
              <h4 className="mb-0">Content</h4>
            </div>
            <div className="card-body ">
              {contents.map((content, contentIndex) => (
                <div className="border p-2 rounded-2 mb-3 py-4 px-4">
                  <div className="d-flex mb-4">
                    <input
                      type="text"
                      placeholder="Title"
                      required
                      className="form-control"
                      onChange={(e) =>
                        handleContentChange(
                          contentIndex,
                          "title",
                          e.target.value
                        )
                      }
                    />
                    <button
                      className="btn btn-danger ms-2 bg-btnDangerBG"
                      type="button"
                      onClick={() => removeContent(contentIndex)}
                    >
                      {/* <i className="fas fa-trash"></i> */}
                      <i class="bx bx-trash-alt"></i>
                    </button>
                  </div>
                  <textarea
                    name="description"
                    id=""
                    cols="30"
                    className="form-control mt-2"
                    placeholder="Description"
                    rows="8"
                    onChange={(e) =>
                      handleContentChange(
                        contentIndex,
                        "description",
                        e.target.value
                      )
                    }
                  ></textarea>
                  <div className="mt-3">
                    <Form.Field>
                      <label htmlFor="courseTHumbnail" className="form-label">
                        Content Video Preview
                      </label>
                      {content.video_file ? (
                        <video
                          controls
                          loop
                          playsInline
                          style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          className="mb-4 shadow-md"
                          src={
                            content.video_file ||
                            "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                          }
                          alt=""
                        />
                      ) : (
                        <img
                          style={{
                            width: "100%",
                            height: "330px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          className="mb-4"
                          src={
                            "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                          }
                          alt=""
                        />
                      )}
                    </Form.Field>
                  </div>
                  <div className="flex items-center my-3">
                    <div className="col-lg-8">
                      <input
                        type="file"
                        placeholder="Item Price"
                        className="form-control me-1 mt-2"
                        name="video_file"
                        onChange={(e) =>
                          handleContentChange(
                            contentIndex,
                            "video_file",
                            e.target.files[0]
                            // e.target.value
                            // e.target.files[0]
                          )
                        }
                      />
                    </div>
                    <div className="ml-3 mt-2">
                      <label htmlFor={`checkbox${1}`}>is_preview</label>
                      <input
                        type="checkbox"
                        className="form-check-input ms-2"
                        name=""
                        id={`checkbox${1}`}
                        onChange={(e) =>
                          handleContentChange(
                            contentIndex,
                            "is_preview",
                            e.target.checked
                          )
                        }
                      />
                    </div>
                  </div>
                  {/* <button
                        className="btn btn-sm btn-outline-danger me-2 my-2"
                        type="button"
                        onClick={() => removeItem(contentIndex, itemIndex)}
                      >
                        Delete Lesson <i className="fas fa-trash"></i>
                      </button> */}

                  {/* {content.items.map((item, itemIndex) => (
                    <div
                      className=" mb-2 mt-2 shadow p-2 rounded-3 "
                      style={{ border: "1px #bdbdbd solid" }}
                    >
                      <input
                        type="text"
                        placeholder="Lesson Title"
                        className="form-control me-1 mt-2"
                        name="title"
                        onChange={(e) =>
                          handleItemChange(
                            contentIndex,
                            itemIndex,
                            "title",
                            e.target.value,
                            e.target.type
                          )
                        }
                      />
                      <textarea
                        name="description"
                        id=""
                        cols="30"
                        className="form-control mt-2"
                        placeholder="Description"
                        rows="8"
                        onChange={(e) =>
                          handleItemChange(
                            contentIndex,
                            itemIndex,
                            "description",
                            e.target.value,
                            e.target.type
                          )
                        }
                      ></textarea>
                      <div className="mt-3">
                        <Form.Field>
                          <label
                            htmlFor="courseTHumbnail"
                            className="form-label"
                          >
                            Content Video Preview
                          </label>
                          {contentVideo ? (
                            <video
                              controls
                              loop
                              playsInline
                              style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                              className="mb-4 shadow-md"
                              src={
                                contentVideo.video.preview ||
                                "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                              }
                              alt=""
                            />
                          ) : (
                            <img
                              style={{
                                width: "100%",
                                height: "330px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                              className="mb-4"
                              src={
                                "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                              }
                              alt=""
                            />
                          )}
                        </Form.Field>
                      </div>
                      <div className="flex items-center my-3">
                        <div className="col-lg-8">
                          <input
                            type="file"
                            placeholder="Item Price"
                            className="form-control me-1 mt-2"
                            name="file"
                            onChange={(e) =>
                              handleItemChange(
                                contentIndex,
                                itemIndex,
                                "file",
                                e.target.files[0],
                                e.target.type
                              )
                            }
                          />
                        </div>
                        <div className="ml-3 mt-2">
                          <label htmlFor={`checkbox${1}`}>Preview</label>
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            name=""
                            id={`checkbox${1}`}
                            onChange={(e) =>
                              handleItemChange(
                                contentIndex,
                                itemIndex,
                                "preview",
                                e.target.checked,
                                e.target.type
                              )
                            }
                          />
                        </div>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger me-2 my-2"
                        type="button"
                        onClick={() => removeItem(contentIndex, itemIndex)}
                      >
                        Delete Lesson <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))} */}

                  <button
                    className="btn btn-sm btn-primary bg-altButtonColor mt-2"
                    type="button"
                    onClick={() => addItem(contentIndex)}
                  >
                    + Add Lesson
                  </button>
                </div>
              ))}

              <button
                className="bg-newContentColor hover:bg-newContentColorHover w-100 mt-2 h-[30px] rounded-lg text-white"
                type="button"
                onClick={addContent}
              >
                + New Section
              </button>
            </div>
            <div className="card-header border-bottom px-4 py-3">
              <h4 className="mb-0">Publish</h4>
            </div>
            <div className="card-body ">
              <div className="border p-2 rounded-2 mb-3 py-4 px-4">
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <div>Module status: </div>
                  <div className="w-44">
                    <select
                      className="form-select"
                      onChange={handleCourseInputChange}
                      name="level"
                    >
                      {/* <option value="">Select level</option> */}
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                      <option value="Disabled">Disabled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button className="btn btn-lg btn-success w-100 mt-2" type="submit">
            Create Module <i className="fas fa-check-circle"></i>
          </Button>
        </section>
      </Form>
      <br />
    </div>
  );
}

export default EditCourseForm;