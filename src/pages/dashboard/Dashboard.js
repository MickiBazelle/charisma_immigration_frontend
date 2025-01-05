import MainContent from "../../components/global/MainContent";
import { Helmet } from "react-helmet";
import { Img } from "../../components/website/Img";
import { AiOutlineRise } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import CourseStatPieChart from "./components/CourseStatPieChart";
import RevenueLineChart from "./components/RevenueLineChart";
import { MdVisibility } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";

function TopReviwedVideo() {
  return (
    <div className="flex justify-between hover:bg-sky-400 items-center rounded-lg h-[35px] mt-2 mr-[15px] px-1">
      <div className="flex items-center">
        <div className="flex h-[30px] w-[30px] justify-center items-center rounded bg-gray-500 mr-2">
          <GiBookCover />
        </div>

        <div className="flex flex-col hover:text-gray-500 ">
          <div className="text-smoke text-xsm font-inter">Chapter 2</div>
          <div className="font-inter font-normal text-xsm text-gray-500">
            2 months ago
          </div>
        </div>
      </div>

      <div className="flex">
        <MdVisibility className="mr-2 text-sky-300" />
        <div className="text-smoke text-xsm font-light">200</div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="flex justify-between hover:bg-sky-400 items-center rounded-lg h-[35px] mt-2 mr-[15px] px-1">
      <div className="flex items-center">
        <div className="flex h-[30px] w-[30px] justify-center items-center rounded bg-gray-500 mr-2">
          <GiBookCover />
        </div>

        <div className="flex flex-col hover:text-gray-500 ">
          <div className="text-smoke text-xsm font-inter">Chapter 2</div>
          <div className="font-inter font-normal text-xsm text-gray-500">
            2 months ago
          </div>
        </div>
      </div>

      <div className="flex">
        <MdVisibility className="mr-2 text-sky-300" />
        <div className="text-smoke text-xsm font-light">200</div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="">
      <Helmet>
        <script
          src="../../assets/js/metismenujs/metismenujs.min.js"
          type="text/babel"
        ></script>
        <script
          src="../../assets/js/bootstrap/bootstrap.bundle.min.js"
          type="text/babel"
        ></script>
        <script src="../../assets/js/app.js" type="text/babel"></script>
        <script
          src="../../assets/js/simplebar/simplebar.min.js"
          type="text/babel"
        ></script>
        <script
          src="../../assets/js/apexcharts/apexcharts.min.js"
          type="text/babel"
        ></script>

        <script
          src="../../assets/js/dashboard/dashboard.init.js"
          type="text/babel"
        ></script>

        <script src="../../assets/js/app.js" type="text/babel"></script>
      </Helmet>
      <div className="">
        <MainContent title="Dashboard">
          <div class="row">
            <div className="col-lg-12">
              {/* <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mx-4 mt-4 h-[100px] gap-[1px] mb-4">
                <div className="bg-sky-500 p-6 rounded-l-lg">
                  <div className="flex justify-center">
                    <div>Total earnings</div>
                  </div>
                  <div className="text-center">$17,280</div>
                </div>
                <div className="bg-sky-500 p-6">
                  <div className="flex justify-center">
                    <div>Total Signups</div>
                  </div>
                  <div className="text-center">$17,280</div>
                </div>
                <div className="bg-sky-500 p-6">
                  <div className="flex justify-center">
                    <div>Total Enrolements</div>
                  </div>
                  <div className="text-center">$17,280</div>
                </div>
                <div className="bg-sky-500 p-6">
                  <div className="flex justify-center">
                    <div>Active Enrolements</div>
                  </div>
                  <div className="text-center">$17,280</div>
                </div>
                <div className="bg-sky-500 p-6">
                  <div className="flex justify-center">
                    <div>Inactive Enrolements</div>
                  </div>
                  <div className="text-center">$17,280</div>
                </div>
                <div className="bg-sky-500 p-6 rounded-r-lg">
                  <div className="flex justify-center">
                    <div>Average Ratings</div>
                  </div>
                  <div className="text-center">$17,280</div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-4 h-[300px] gap-4 mb-4">
                <div className="bg-sky-500 col-span-2 rounded-lg"></div>
                <div className="bg-sky-500 col-span-1 rounded-lg"></div>
              </div> */}
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 mx-4 mt-4">
            <div className="flex flex-col col-span-3 h-[100px]">
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 grow mb-4 mr-[30px]">
                <div className="bg-ebonyClay px-4 pt-3 rounded-lg h-[100px]">
                  <div className="flex justify-between items-baseline text-smoke font-semibold">
                    <div>Total earnings</div>
                    <div className="flex flex-row h-[24px] w-[24px] justify-center items-center rounded-full bg-green-200">
                      <RiMoneyDollarCircleFill className="text-green-500 mb-[5px]" />
                      <AiOutlineRise className="absolute text-green-500 mt-[10px] ml-[5px]" />
                    </div>
                  </div>
                  <AiOutlineRise className="text-green-500 text-2xl  mt-[2px] ml-[5px] mb-2" />
                  <div className="flex justify-between">
                    <div className="text-gray-400 text-sm">Balance</div>
                    <div className="text-sm text-green-500 font-semibold">
                      $17,280
                    </div>
                  </div>
                </div>

                <div className="bg-ebonyClay px-4 pt-3 rounded-lg h-[100px]">
                  <div className="flex justify-between items-baseline text-smoke font-semibold">
                    <div>Total Signups</div>
                    <div className="flex flex-row h-[24px] w-[24px] justify-center items-center rounded-full bg-sky-200">
                      <FaStar className="text-sky-500" />
                    </div>
                  </div>
                  <AiOutlineRise className="text-sky-500 text-2xl  mt-[2px] ml-[5px] mb-2" />
                  <div className="flex justify-between">
                    <div className="text-gray-400 text-sm">Signups</div>
                    <div className="text-sm text-sky-500 font-semibold">
                      $17,280
                    </div>
                  </div>
                </div>

                <div className="bg-ebonyClay px-4 pt-3 rounded-lg h-[100px]">
                  <div className="flex justify-between items-baseline text-smoke font-semibold">
                    <div>Total Enrolements</div>
                    <div className="flex flex-row h-[24px] w-[24px] justify-center items-center rounded-full bg-orange-200">
                      <PiStudent className="text-orange-500" />
                    </div>
                  </div>
                  <AiOutlineRise className="text-orange-500 text-2xl  mt-[2px] ml-[5px] mb-2" />
                  <div className="flex justify-between">
                    <div className="text-gray-400 text-sm">Enrolements</div>
                    <div className="text-sm text-orange-500 font-semibold">
                      $17,280
                    </div>
                  </div>
                </div>
              </div>

              {/* Ge */}
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 h-[150px] mr-[30px]">
                <div className="flex flex-col bg-ebonyClay  col-span-1 rounded-lg">
                  <div className="">
                    <div className="mt-3 ml-3 text-smoke text-sm font-inter font-semibold text-left ">
                      Top Reviewed Video
                      <div className="my-3">
                        <div className="rounded-lg h-[50px] mt-2 mr-[10px]"></div>
                        <div className="rounded-lg h-[50px] mt-2 mr-[10px]"></div>
                        <div className="rounded-lg h-[50px] mt-2 mr-[10px]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-ebonyClay  col-span-2 rounded-lg">
                  <div className="mt-3 ml-3 text-smoke text-sm font-semibold text-left ">
                    Top Reviewed Video
                    <div className="my-3">
                      <div className="rounded-lg h-[50px] mt-2 mr-[10px]"></div>
                      <div className="rounded-lg h-[50px] mt-2 mr-[10px]"></div>
                      <div className="rounded-lg h-[50px] mt-2 mr-[10px]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 mt-2 gap-3 mb-2 ">
                  <div className="bg-ebonyClay h-[290px] rounded-lg">
                    <div className="pt-3 pl-4 text-smoke text-sm font-semibold text-left">
                      Revenue
                    </div>
                    <RevenueLineChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid mb-4 gap-4">
              <div className="bg-ebonyClay rounded-lg">
                <div className="mt-3 ml-3 text-smoke text-sm font-semibold text-left ">
                  Top Reviewed Video
                  <div className="my-3">
                    <div className="rounded-lg h-[35px] mt-2 mr-[10px]"></div>
                    <div className="rounded-lg h-[35px] mt-2 mr-[10px]"></div>
                    <div className="rounded-lg h-[35px] mt-2 mr-[10px]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-ebonyClay rounded-lg">
                <div className="my-2 ml-3 text-smoke text-sm font-semibold text-left ">
                  Top Reviewed Video
                  <div className="my-2">
                    <TopReviwedVideo />
                    <TopReviwedVideo />
                    <TopReviwedVideo />
                  </div>
                </div>
              </div>
              <div className="bg-ebonyClay rounded-lg h-[250px]">
                <div className="mt-3 ml-3 text-smoke text-sm font-semibold text-left">
                  Top Client Location
                </div>
                <div className="flex flex-col justify-center items-center">
                  <CourseStatPieChart />
                </div>
              </div>
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
}

export default Dashboard;
