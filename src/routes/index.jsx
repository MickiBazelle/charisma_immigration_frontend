import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddCourse from "../pages/courses/AddCourse";
import CoursesList from "../pages/courses/CoursesList";
import Category from "../pages/courses/Category";
import AppLayout from "../components/layout/AppLayout";
import LandingPageLight from "../pages/website/landing_page/LandingPageLight";

import CourseDetail from "../pages/courses/CourseDetail";
import AboutUs from "../pages/website/about_us/AboutUs";
import ContactUs from "../pages/website/contact_us/ContactUs";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import AdminUsers from "../pages/auth/AdminUsers";
import AdminUserDetail from "../pages/auth/AdminUserDetail";
import EB2ConsultingServices from "../pages/website/services/EB2ConsultingServices";
import EB2DraftingAndCoaching from "../pages/website/services/EB2DraftingAndCoaching";
import FamilyBasedGreenCard from "../pages/website/services/FamilyBasedGreenCard";
import PetitionReview from "../pages/website/services/PetitionReview";
import RequestForEvidenceAssistance from "../pages/website/services/RequestForEvidenceAssitance";
import SchoolAdmissionsAndVisaServices from "../pages/website/services/SchoolAdmissionsAndVisaServices";
import Testimonials from "../pages/website/testimonials/Testimonials";
import Courses from "../pages/website/courses/Courses";
import Login from "../pages/website/auth/Login";
import Register from "../pages/website/auth/Register";
import Messages from "../pages/messages/Messages";
import Client from "../pages/client/Client";
import ClientDetail from "../pages/client/ClientDetail";
import TestimonialsAdmin from "../pages/testimonials_admin/TestimonialsAdmin";
import MessageDetail from "../pages/messages/MessageDetail";
import Bookings from "../pages/bookings/Bookings";
import TestimonialDetail from "../pages/testimonials_admin/TestimonialDetail";
import AddModule from "../pages/courses/AddModule";
import EB2NIWCoachingCourse from "../pages/courses/EB2NIWCoachingCourse";
import EB2NIWCoachingModuleDetail from "../pages/courses/EB2NIWCoachingModuleDetail";
import CourseSubsription from "../pages/website/course_subscription/CourseSubsription";
import UserDashboard from "../pages/website/user_dashboard/UserDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <WebsiteLayout />,
        children: [
          {
            path: "/",
            element: <LandingPageLight />,
          },
          {
            path: "/login/",
            element: <Login />,
          },
          {
            path: "/register/",
            element: <Register />,
          },
          {
            path: "/about-us/",
            element: <AboutUs />,
          },
          {
            path: "/contact-us/",
            element: <ContactUs />,
          },
          {
            path: "/testimonials/",
            element: <Testimonials />,
          },
          {
            path: "/courses/",
            element: <Courses />,
          },
          {
            path: "/eb2-consulting-services/",
            element: <EB2ConsultingServices />,
          },
          {
            path: "/eb2-drafting-and-coaching/",
            element: <EB2DraftingAndCoaching />,
          },
          {
            path: "/petition-review/",
            element: <PetitionReview />,
          },

          {
            path: "/request-for-evidence-assistance/",
            element: <RequestForEvidenceAssistance />,
          },
          {
            path: "/family-based-greencard/",
            element: <FamilyBasedGreenCard />,
          },
          {
            path: "/us-schools-admissions-and-visa-services/",
            element: <SchoolAdmissionsAndVisaServices />,
          },
          {
            path: "/course/subscription",
            element: <CourseSubsription />,
          },
          {
            path: "/canceled=true",
            element: <CourseSubsription />,
          },
          {
            path: "/user/dashboard/",
            element: <UserDashboard />,
          },
        ],
      },

      {
        path: "/accounts/login/",
        element: <AdminLogin />,
      },
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/accounts/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/accounts/courses/",
            element: <CoursesList />,
          },
          {
            path: "/accounts/courses/1/detail/",
            element: <CourseDetail />,
          },
          {
            path: "/accounts/category/",
            element: <Category />,
          },
          {
            path: "/accounts/courses/add",
            element: <AddCourse />,
          },
          {
            path: "/accounts/eB2NIWCoachingCourse/",
            element: <EB2NIWCoachingCourse />,
          },
          {
            path: "/accounts/courses/module/add/",
            element: <AddModule />,
          },
          {
            path: "/accounts/courses/1/modules/:id?/detail",
            element: <EB2NIWCoachingModuleDetail />,
          },
          {
            path: "/accounts/bookings/",
            element: <Bookings />,
          },
          {
            path: "/accounts/users/",
            element: <AdminUsers />,
          },
          {
            path: "/accounts/users/:id?/detail",
            element: <AdminUserDetail />,
          },
          {
            path: "/accounts/clients/",
            element: <Client />,
          },
          {
            path: "/accounts/clients/:id?/profile/",
            element: <ClientDetail />,
          },

          {
            path: "/accounts/messages/",
            element: <Messages />,
          },
          {
            path: "/accounts/messages/:id?/detail/",
            element: <MessageDetail />,
          },
          {
            path: "/accounts/testimonials/",
            element: <TestimonialsAdmin />,
          },
          {
            path: "/accounts/testimonials/:id?/detail/",
            element: <TestimonialDetail />,
          },
        ],
      },
    ],
  },
]);
