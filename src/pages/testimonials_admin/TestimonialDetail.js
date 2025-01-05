import MainContent from "../../components/global/MainContent";
import MainContentHeader from "../../components/global/MainContentHeader";
import { Img } from "../../components/website/Img";
import profilePic from "../../assets/imgs/trans_badge.png";
import logo2 from "../../assets/imgs/logo2.png";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useParams } from "react-router-dom";
import dateFormatter2 from "../../utils/dateFormatter2";
import TestimonialInfo from "./components/TestimonialInfo";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../components/global/CustomDialog";

function TestimonialDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [testimonial, setTestimonial] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const onDeleteTestimonial = () => {
    setIsDeleting(true);
    
    const idString = id.toString();
    axiosInstance
      .delete(`/accounts/testimonials/${idString}/delete`)
      .then(async (res) => {
        setIsDeleting(false);
        navigate("/accounts/testimonials/");
      })
      .catch((error) => {
        setIsDeleting(false);
      });
  };

  const handleDeleteDestimonial = () => {};

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/accounts/testimonials/${id}/detail/`)
      .then((res) => {
        const mData = res.data.data;
        
        const currentTestimonial = {
          client_name: mData.client_name,
          client_location: mData.client_location,
          client_rating: mData.client_rating,
          client_message: mData.client_message,
          client_occupation: mData.client_occupation,
          photo: mData.photo,
          created: mData.created,
          updated: mData.updated,
        };
        setTestimonial(currentTestimonial);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error Fetching testimonial details:", error);
      });
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <CustomDialog
        open={openModal}
        onDelete={() => onDeleteTestimonial()}
        isDeleting={isDeleting}
        onClose={() => setOpenModal(false)}
      ></CustomDialog>
      <MainContent title="Detail">
        <div className="flex flex-col bg-ebonyClay rounded-xl h-[120px] mt-4 mx-3">
          <div className="flex-grow mx-[20px] pt-4">
            <div className="flex items-center">
              <Img
                src={testimonial.photo}
                className="w-[50px] h-[50px] rounded-full"
              ></Img>
              <div className="flex flex-col">
                <div className="pl-3 text-l font-inter text-white font-semibold">
                  {testimonial.client_name}
                </div>
                <div className="pl-3 text-xs font-semibold text-gray-400">
                  UwtanTisap4WgxsYXdS7
                </div>
              </div>
              <div className="flex-grow"></div>
              <button
                className="bg-btnDangerBG hover:to-btnDangerBGHover rounded text-white w-[130px] h-[40px]"
                onClick={() => setOpenModal(true)}
              >
                Delete Testimonial
              </button>
            </div>
          </div>
          <div className=" justify-end">
            <div className="grid grid-cols-3">
              <button className="bg-mirage hover:bg-ebonyClayHover text-white rounded-bl-xl border-color py-[10px] px-4 border-[0.2px] border-gray-500">
                Send Mail
              </button>
              <button className="bg-mirage hover:bg-ebonyClayHover text-white py-[10px] px-4 x-4 border-[0.2px]  border-gray-500">
                Edit Testimonial
              </button>
              <button className="bg-mirage hover:bg-ebonyClayHover text-white rounded-br-xl py-[10px] px-4 x-4 border-[0.2px] border-gray-500">
                Set as Inactive
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 h-screen gap-8 mt-4 mx-3 mb-2">
          <div className="bg-ebonyClay col-span-2 rounded-xl min-h-[450px] max-h-[450px] overflow-y-auto">
            <div className="mx-4 my-3">
              <div className="text-smoke font-semibold">
                Testimonial Information
              </div>
              <div className="text-gray-400 text-xs font-semibold">
                Details of testimonial.
              </div>
            </div>
            <div class="border-b border-gray-600 mb-4"></div>
            <div className="flex flex-row mx-4">
              <div className="flex flex-col mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Testimonial
                </div>
                <div className="text-smoke text-sm">
                  {testimonial.client_message}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-ebonyClay col-span-1 rounded-xl h-[450px]">
            <div className="mx-4 my-3">
              <div className="text-smoke font-semibold">
                Testimonial Details
              </div>
            </div>
            <div class="border-b border-gray-600 mb-4"></div>
            <div className="mx-4 mt-3">
              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold">
                  Full name
                </div>
                <div className="text-smoke text-sm">
                  {testimonial.client_name}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold">
                  Client Occupation
                </div>
                <div className="text-smoke text-sm">
                  {testimonial.client_occupation}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold">
                  Client Location
                </div>
                <div className="text-smoke text-sm">
                  {testimonial.client_location}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold">
                  Client Rating
                </div>
                <div className="text-smoke text-sm">
                  {testimonial.client_rating}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold">
                  Created on
                </div>
                <div className="text-smoke text-sm">
                  {dateFormatter2(testimonial.created)}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold">
                  Updated on
                </div>
                <div className="text-smoke text-sm">
                  {dateFormatter2(testimonial.updated)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default TestimonialDetail;
