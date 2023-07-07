import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HospitalListPage from "./pages/HospitalListPage";
import HospitalDetailPage from "./pages/HospitalDetailPage";
import Commonlogin from "./components/auth/CommonSignup";
import ScrollToTop from "./components/hooks/ScroollToTop";
import EmployeeListPage from "./pages/EmployeeListPage";
import EmployeeDetailPage from "./pages/EmployeeDetailPage";
import JobListPage from "./pages/JobListPage";
import JobDetailPage from "./pages/JobDetailPage";

import HospitalSignupPage from "./pages/auth/hospital/HospitalSignupPage";

import EnterOtpPage from "./pages/auth/hospital/EnterOtpPage";
import LoginPage from "./pages/auth/hospital/LoginPage";
import HospitalCreateProfile from "./pages/auth/hospital/HospitalCreateProfile";
import HospitalDashboard from "./pages/dashboard/hospital";
import HospitalProfile from "./components/dashboard/hospital/HospitalProfile";
import PostJob from "./components/dashboard/hospital/PostJob";
import ManagedJobs from "./components/dashboard/hospital/ManagedJobs";
import AllPackages from "./components/dashboard/hospital/AllPackages";
import PackageStatus from "./components/dashboard/hospital/PackageStatus";
import AllNotification from "./components/dashboard/hospital/AllNotification";
import AllMessages from "./components/dashboard/hospital/AllMessages";
import AllApplicants from "./components/dashboard/hospital/AllApplicants";
import ChangePassword from "./components/dashboard/hospital/ChangePassword";
import EditProfile from "./components/dashboard/hospital/EditProfile";
import JobEdit from "./components/dashboard/hospital/JobEdit";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Testimonial from "./pages/Testimonial";
import ProfessionalDashboard from "./pages/dashboard/professional";
import MyProfile from "./components/dashboard/professional/MyProfile";
import ProfessionalSignupPage from "./pages/auth/professional/ProfessionalSignupPage";
import ProfessionalOtpPage from "./pages/auth/professional/ProfessionalOtpPage";
import ProfessionalCreateProfile from "./pages/auth/professional/ProfessionalCreateProfile";
import ApplyForJob from "./components/dashboard/professional/ApplyForJob";
import AppliedJobs from "./components/dashboard/professional/AppliedJobs";
import JobDetails from "./components/dashboard/professional/JobDetails";
import BrowseHospital from "./components/dashboard/professional/BrowseHospital";
import DetailHospital from "./components/dashboard/professional/DetailHospital";
import Email from "./components/dashboard/professional/Email";
import SentMails from "./components/dashboard/professional/SentMails";
import TrashMails from "./components/dashboard/professional/TrashMails";
import ChangePasswordProfessional from "./components/dashboard/professional/ChangePasswordProfessional";
import EditProfileProfessional from "./components/dashboard/professional/EditProfileProfessional";
import MessageProfessional from "./components/dashboard/professional/MessageProfessional";
import AllMails from "./components/dashboard/professional/AllMails";
import AssistantChatProfessional from "./components/dashboard/professional/AssistantChatProfessional";
import AssistantMailsProfessional from "./components/dashboard/professional/AssistantMailsProfessional";
import NotficationsProfessional from "./components/dashboard/professional/NotficationsProfessional";
import PersonalDashboard from "./pages/dashboard/personal";
import MyProfilePersonal from "./components/dashboard/personal/MyProfilePersonal";
import BrowserProfessional from "./components/dashboard/personal/BrowserProfessional";
import PersonalSignupPage from "./pages/auth/personal/PersonalSignupPage";
import PersonalOtpPage from "./pages/auth/personal/PersonalOtpPage";
import PersonalCreateProfile from "./pages/auth/personal/PersonalCreateProfile";
import AssistantMailsPersonal from "./components/dashboard/personal/AssistantMailsPersonal";
import AssistantChatPersonal from "./components/dashboard/personal/AssistantChatPersonal";
import MessagePersonal from "./components/dashboard/personal/MessagePersonal";
import NotificationsPersonal from "./components/dashboard/personal/NotificationsPersonal";
import ChangePasswordPersonal from "./components/dashboard/personal/ChangePasswordPersonal";
import EditProfilePersonal from "./components/dashboard/personal/EditProfilePersonal";
import AllMailsPersonal from "./components/dashboard/personal/AllMailsPersonal";
import DetailCandidate from "./components/dashboard/personal/DetailCandidate";
import ViewProfessional from "./components/dashboard/personal/ViewProfessional";
import EmailProfessionalDescription from "./components/dashboard/professional/EmailProfessionalDescription";
import CommonSignupSection from "./pages/auth/CommonSignupSection";
import CommonForgetPassword from "./pages/auth/CommonForgetPassword";
import CommonGetOTP from "./pages/auth/CommonGetOTP";
import CommonResetPassword from "./pages/auth/hospital/CommonResetPassword";
import HospitalJobDetail from "./components/dashboard/hospital/HospitalJobDetail";
import AssistantChatHospital from "./components/dashboard/hospital/AssistantChatHospital";
import AssistantMailsHospital from "./components/dashboard/hospital/AssistantMailsHospital";
import AllMailsHospital from "./components/dashboard/hospital/AllMailsHospital";
import EmailPersonalDescription from "./components/dashboard/personal/EmailPersonalDescription";
import ComposePersonalEmail from "./components/dashboard/personal/ComposePersonalEmail";
import SentMailsPersonal from "./components/dashboard/personal/SentMailsPersonal";
import TrashMailsPersonal from "./components/dashboard/personal/TrashMailsPersonal";
import ComposeHospitalEmail from "./components/dashboard/hospital/ComposeHospitalEmail";
import EmailHospitalDescription from "./components/dashboard/hospital/EmailHospitalDescription";
import TrashMailsHospital from "./components/dashboard/hospital/TrashMailsHospital";
import SentMailsHospital from "./components/dashboard/hospital/SentMailsProfessional";
import BrowseCandidate from "./components/dashboard/hospital/BrowseCandidate";
import DetailCandidatePage from "./components/dashboard/hospital/DetailCandidatePage";
import AllApplicantsDetail from "./components/dashboard/hospital/AllApplicantsDetail";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/hospital-list" element={<HospitalListPage />} />
          <Route path="/hospital-detail" element={<HospitalDetailPage />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
          <Route path="/employee-detail" element={<EmployeeDetailPage />} />
          <Route path="/job-list" element={<JobListPage />} />
          <Route path="/job-detail" element={<JobDetailPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/common-signup" element={<CommonSignupSection />} />
          <Route path="/hospital-signup" element={<HospitalSignupPage />} />
          <Route
            path="/professional-signup"
            element={<ProfessionalSignupPage />}
          />
          <Route path="/personal-signup" element={<PersonalSignupPage />} />
          <Route path="/hospital-signup-otp" element={<EnterOtpPage />} />
          <Route
            path="/professional-signup-otp"
            element={<ProfessionalOtpPage />}
          />
          <Route path="/personal-signup-otp" element={<PersonalOtpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<CommonForgetPassword />} />
          <Route path="/forgot-password-otp" element={<CommonGetOTP />} />
          <Route path="/reset-password" element={<CommonResetPassword />} />
          <Route
            path="/hospital-create-profile"
            element={<HospitalCreateProfile />}
          />
          <Route
            path="/professional-create-profile"
            element={<ProfessionalCreateProfile />}
          />
          <Route
            path="/personal-create-profile"
            element={<PersonalCreateProfile />}
          />
          <Route path="/hospital" element={<HospitalDashboard />}>
            <Route
              path="/hospital"
              element={<Navigate to="/hospital/my-profile" replace />}
            />
            <Route path="my-profile" element={<HospitalProfile />} />

            <Route path="post-jobs" element={<PostJob />} />
            <Route path="job-edit" element={<JobEdit />} />
            <Route path="job-detail" element={<HospitalJobDetail />} />
            <Route path="managed-jobs" element={<ManagedJobs />} />
            <Route path="applicants" element={<AllApplicantsDetail/>} />
            <Route path="buy-packages" element={<AllPackages />} />
            <Route path="package-status" element={<PackageStatus />} />
            <Route path="browse-candidate" element={<BrowseCandidate />} />
            <Route path="detail-candidate" element={<DetailCandidatePage />} />
            <Route path="notifications" element={<AllNotification />} />
            <Route path="messages" element={<AllMessages />} />
            <Route path="all-applicants" element={<AllApplicants />} />
            <Route path="all-mails" element={<AllMailsHospital />} />
            <Route
              path="email-description"
              element={<EmailHospitalDescription />}
            />
            <Route path="compose-email" element={<ComposeHospitalEmail />} />
            <Route path="sent-mails" element={<SentMailsHospital />} />
            <Route path="trash-mails" element={<TrashMailsHospital />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="assistant-chat" element={<AssistantChatHospital />} />
            <Route path="assistant-mail" element={<AssistantMailsHospital />} />
          </Route>
          

          
          <Route path="/professional" element={<ProfessionalDashboard />}>
            <Route
              path="/professional"
              element={<Navigate to="/professional/my-profile" replace />}
            />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="apply-for-job" element={<ApplyForJob />} />
            <Route path="job-detail-page" element={<JobDetails />} />
            <Route path="applied-jobs" element={<AppliedJobs />} />
            <Route path="browse-hospital" element={<BrowseHospital />} />
            <Route path="detail-hospital" element={<DetailHospital />} />
            <Route path="all-mails" element={<AllMails />} />
            <Route
              path="email-description"
              element={<EmailProfessionalDescription />}
            />
            <Route path="email" element={<Email />} />
            <Route path="sent-mails" element={<SentMails />} />
            <Route path="trash-mails" element={<TrashMails />} />
            <Route
              path="password-change"
              element={<ChangePasswordProfessional />}
            />
            <Route path="profile-edit" element={<EditProfileProfessional />} />
            <Route
              path="notifications"
              element={<NotficationsProfessional />}
            />
            <Route path="messages" element={<MessageProfessional />} />
            <Route
              path="assistant-chats"
              element={<AssistantChatProfessional />}
            />
            <Route
              path="assistant-mails"
              element={<AssistantMailsProfessional />}
            />
          </Route>







          <Route path="/personal" element={<PersonalDashboard />}>
            <Route
              path="/personal"
              element={<Navigate to="/personal/my-profile" replace />}
            />

            <Route path="my-profile" element={<MyProfilePersonal />} />
            <Route
              path="browser-professional"
              element={<BrowserProfessional />}
            />
            <Route path="detail-candidate" element={<DetailCandidate />} />
            <Route path="view-professional" element={<ViewProfessional />} />
            <Route path="all-mails" element={<AllMailsPersonal />} />
            <Route
              path="email-description"
              element={<EmailPersonalDescription />}
            />
            <Route path="compose-email" element={<ComposePersonalEmail />} />
            <Route path="sent-mails" element={<SentMailsPersonal />} />
            <Route path="trash-mails" element={<TrashMailsPersonal />} />
            <Route
              path="password-change"
              element={<ChangePasswordPersonal />}
            />
            <Route path="notifications" element={<NotificationsPersonal />} />
            <Route path="messages" element={<MessagePersonal />} />
            <Route path="assistant-chats" element={<AssistantChatPersonal />} />
            <Route
              path="assistant-mails"
              element={<AssistantMailsPersonal />}
            />
            <Route path="edit-profile" element={<EditProfilePersonal />} />
          </Route>

          
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
