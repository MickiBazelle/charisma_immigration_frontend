import { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import logo2 from "../../assets/imgs/logo2.png";
import { useParams } from "react-router-dom";
import dateFormatter from "../../utils/dateFormatter";
import MainContent from "../../components/global/MainContent";
import { Img } from "../../components/website/Img";
import dateFormatter2 from "../../utils/dateFormatter2";
import ClientInfo from "./components/ClientInfo";
import { toast, ToastContainer } from "react-toastify";

function ClientDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});


  const blockClient = ()=> {
    axiosInstance
      .patch(`/accounts/clients/${id}/deactivate/`).then((res)=> {
        const mData = res.data.message;
        toast.dismiss();
        toast.success(mData);
        
        fetchUser();
      }).catch ((error)=> {
        const errorData = error.response.data;
        toast.error(`Error: ${errorData.message}`);
        console.error("Error Fetching user details:", error);
      })
  }

  const fetchUser = ()=> {
    setIsLoading(true);
    axiosInstance
    .get(`/accounts/clients/${id}/profile`)
    .then((res) => {
      const mUser = res.data.data;
      
      const currentUser = {
        first_name: mUser.user.first_name,
        last_name: mUser.user.last_name,
        email: mUser.user.email,
        username: mUser.user.first_name,
        is_active: mUser.user.is_active,
        is_superuser: mUser.user.is_superuser,
        is_staff: mUser.user.is_staff,
        created: mUser.created,
        updated: mUser.updated,
      };
      setUser(currentUser);
    })
    .catch((error) => {
      setIsLoading(false);
      console.error("Error Fetching user details:", error);
    });

  }

  useEffect(() => {
   
    fetchUser();
  }, [id]);

  return (
    <div>
      <ToastContainer pauseOnHover theme="colored" />
      <MainContent title="Detail">
        <div className="flex flex-col bg-ebonyClay rounded-xl h-[120px] mt-4 mx-3">
          <div className="flex-grow mx-[20px] pt-4">
            <div className="flex items-center">
              <Img src={logo2} className="w-[50px] rounded-full"></Img>
              <div>
                <div className="pl-3 text-l font-inter text-white font-semibold">
                  {user.first_name} {user.last_name}
                </div>
                <div className="pl-3 text-xs font-semibold text-gray-400">
                  UwtanTisap4WgxsYXdS7
                </div>
              </div>
              <div className="flex-grow"></div>
              <button className={`${user.is_active ?  'bg-btnDangerBG hover:to-btnDangerBGHover': 'bg-buttonColor hover:bg-buttonColorHover'}   rounded text-white w-[100px] h-[40px]`}
              onClick={blockClient}
              >
               {user.is_active ? 'Block User': 'Unblock User'}
              </button>
            </div>
          </div>
          <div className="relative justify-end">
            <div className="grid grid-cols-3">
              <button className="bg-mirage hover:bg-ebonyClayHover text-white rounded-bl-xl border-color py-[10px] px-4 border-[0.2px] border-gray-500">
                Send Mail
              </button>
              <button className="bg-mirage hover:bg-ebonyClayHover text-white py-[10px] px-4 x-4 border-[0.2px]  border-gray-500">
                Edit User
              </button>
              <button className="bg-mirage hover:bg-ebonyClayHover text-white rounded-br-xl py-[10px] px-4 x-4 border-[0.2px] border-gray-500">
                View Report
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 h-screen gap-8 mt-4 mx-3">
          <div className="bg-ebonyClay col-span-2 rounded-xl h-[450px]">
            <div className="mx-4 my-3">
              <div className="text-smoke font-semibold">Admin Information</div>
              <div className="text-gray-400 text-xs font-semibold">
                Personal details of admin.
              </div>
            </div>
            <div class="border-b border-gray-600 mb-4"></div>
            <ClientInfo
              label1="Full Name"
              value1={`${user.first_name} ${user.last_name}`}
              label2="User Id"
              value2="N/A"
            />
            <ClientInfo
              label1="Email Address"
              value1={`${user.email}`}
              label2="Phone Number"
              value2="+233546814337"
            />
            <ClientInfo
              label1="Active"
              value1={`${user.is_active}`}
              label2=""
              value2=""
            />
            {/* <ClientInfo
              label1="Staff"
              value1={`${user.is_staff}`}
              label2=""
              value2=""
            /> */}
          </div>
          <div className="bg-ebonyClay col-span-1 rounded-xl h-[450px]">
            <div className="mx-4 my-3">
              <div className="text-smoke font-semibold">User Activity</div>
              <div className="text-gray-400 text-xs font-semibold">
                Last login and other admin details
              </div>
            </div>
            <div class="border-b border-gray-600 mb-4"></div>
            <div className="mx-4 mt-3">
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Created
                </div>
                <div className="text-smoke text-sm">
                  {dateFormatter2(user.created)}
                </div>
              </div>
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Updated
                </div>
                <div className="text-smoke text-sm">
                  {" "}
                  {dateFormatter2(user.updated)}
                </div>
              </div>
              <div className="mb-5">
                <div className="text-gray-400 text-xs font-semibold">
                  Last Login
                </div>
                <div className="text-smoke text-sm">N/A</div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default ClientDetail;
