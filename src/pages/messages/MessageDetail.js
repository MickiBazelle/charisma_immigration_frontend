import MainContent from "../../components/global/MainContent";
import MainContentHeader from "../../components/global/MainContentHeader";
import { Img } from "../../components/website/Img";
import profilePic from "../../assets/imgs/trans_badge.png";
import logo2 from "../../assets/imgs/logo2.png";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useParams } from "react-router-dom";
import dateFormatter2 from "../../utils/dateFormatter2";
import MessageInfo from "./components/MessageInfo";

function MessageDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/accounts/messages/${id}/detail/`)
      .then((res) => {
        const mData = res.data.data;
        
        const currentUser = {
          first_name: mData.first_name,
          last_name: mData.last_name,
          email: mData.email,
          message: mData.message,
          phone_number: mData.phone_number,
          created: mData.created,
        };
        setUser(currentUser);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error Fetching message details:", error);
      });
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <MainContent title="Detail">
        <div className="flex flex-col bg-ebonyClay rounded-xl h-[120px] mt-4 mx-3">
          <div className="flex-grow mx-[20px] pt-4">
            <div className="flex items-center">
              <Img src={logo2} className="w-[50px] rounded-full"></Img>
              <div className="flex-grow font-inter pl-5 text-base font-semibold text-smoke">
                {message.first_name} {message.last_name}
              </div>
              <button className="bg-btnDangerBG hover:to-btnDangerBGHover rounded text-white w-[130px] h-[40px]">
                Delete Message
              </button>
            </div>
          </div>
          <div className="relative justify-end">
            <div className="grid grid-cols-3">
              <button className="bg-mirage hover:bg-ebonyClayHover text-white rounded-bl-xl border-color py-[10px] px-4 border-[0.2px] border-gray-500">
                Send Mail
              </button>
              <button className="bg-mirage hover:bg-ebonyClayHover text-white py-[10px] px-4 x-4 border-[0.2px]  border-gray-500">
                Edit Admin
              </button>
              <button className="bg-mirage hover:bg-ebonyClayHover text-white rounded-br-xl py-[10px] px-4 x-4 border-[0.2px] border-gray-500">
                Set Role
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 h-screen gap-8 mt-4 mx-3 mb-2">
          <div className="bg-ebonyClay col-span-2 rounded-xl min-h-[450px] max-h-[450px] overflow-y-auto">
            <div className="mx-4 my-3">
              <div className="text-smoke font-semibold">Admin Information</div>
              <div className="text-gray-400 text-xs font-semibold">
                Personal details of admin.
              </div>
            </div>
            <div class="border-b border-gray-600 mb-4"></div>
            <div className="flex flex-row mx-4">
              <div className="flex flex-col mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Message
                </div>
                <div className="text-smoke text-sm">{message.message}</div>
              </div>
            </div>

            {/* <MessageInfo
              label1="Message"
              value1={`${message.message}`}
              label2="User Id"
              value2="N/A"
            /> */}
          </div>
          <div className="bg-ebonyClay col-span-1 rounded-xl h-[450px]">
            <div className="mx-4 my-3">
              <div className="text-smoke font-semibold">Message Details</div>
            </div>
            <div class="border-b border-gray-600 mb-4"></div>
            <div className="mx-4 mt-3">
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Date Sent
                </div>
                <div className="text-smoke text-sm">
                  {dateFormatter2(message.created)}
                </div>
              </div>
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Full name
                </div>
                <div className="text-smoke text-sm">
                  {message.first_name} {message.last_name}
                </div>
              </div>
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">Email</div>
                <div className="text-smoke text-sm">{message.email}</div>
              </div>
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Phone Number
                </div>
                <div className="text-smoke text-sm">{message.phone_number}</div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default MessageDetail;
