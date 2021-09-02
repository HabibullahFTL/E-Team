import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserLogin from "./components/Authentication/UserLogin/UserLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import ShareIdea from "./components/ShareIdea/ShareIdea";
import AllIdea from "./components/AllIdea/AllIdea";
import QuizArea from "./components/QuizArea/QuizArea";
import SetMeeting from "./components/SetMeeting/SetMeeting";
import InputApplication from "./components/InputApplication/InputApplication";
import CourseVideo from "./components/CourseVideo/CourseVideo";
import AssignmentArea from "./components/AssignmentArea/AssignmentArea";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import AllUserList from "./components/AllUserList/AllUserList";
import AssignCourse from "./components/AssignCourse/AssignCourse";
import MeetingList from "./components/MeetingList/MeetingList";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import CreateNewUser from "./components/Authentication/CreateNewUser/CreateNewUser";
import AllCourse from "./components/AllCourse/AllCourse";
import MainHome from "./components/MainHome/MainHome";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { db, getDataFromLS } from "./components/Authentication/loginmanager";
import {
  UserDataContext,
  SystemAdminDataContext,
} from "./Contexts/UserDataContext";
import RegisterCompany from "./components/Authentication/RegisterCompany/RegisterCompany";
import Navbar from "./components/MainHome/Navbar/Navbar";
import Footer from "./components/MainHome/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import LoginCompany from "./components/Authentication/LoginCompany/LoginCompany";
import PrivateRoute from "./components/Authentication/PrivatRoute/PrivateRoute";
import CreateDepartment from "./components/CreateDepartment/CreateDepartment";
import AllDepartment from "./components/AllDepartment/AllDepartment";
import SystemAdminLogin from "./components/Authentication/SystemAdminLogin/SystemAdminLogin";
import AddSystemAdmin from "./components/Authentication/AddSystemAdmin/AddSystemAdmin";
import CreateTask from "./components/CreateTask/CreateTask";
import PricingCard from "./components/PricingCard/PricingCard";
import Contact from "./components/Contact/Contact";
import SystemAdminSelftActivation from "./components/Authentication/SystemAdminSelftActivation/SystemAdminSelftActivation";
import OurTeam from "./components/OurTeam/OurTeam";
import SARoute from "./components/Authentication/SARoute/SARoute";
import SADashboard from "./components/SystemAdmin/SADashboard/SADashboard";
import ViewAllAdmin from "./components/SystemAdmin/ViewAllAdmin/ViewAllAdmin";
import UserSelftActivation from "./components/Authentication/UserSelftActivation/UserSelftActivation";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import AllCompany from "./components/SystemAdmin/AllCompany/AllCompany";
import SAHome from "./components/SystemAdmin/SAHome/SAHome";
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import EditCompanyProfile from "./components/EditCompanyProfile/EditCompanyProfile";
import EditSAProfile from "./components/EditSAProfile/EditSAProfile";
import AddCourse from "./components/AddCourse/AddCourse";
import EditCourse from "./components/AllCourse/EditCourse/EditCourse";
import AddVideo from "./components/AllCourse/AddVideo/AddVideo";
import AddQuiz from "./components/AllCourse/AddQuiz/AddQuiz";
import AddTask from "./components/AllCourse/AddTask/AddTask";
import EditModule from "./components/AllCourse/EditModule/EditModule";
import UserProfile from "./components/UserProfile/UserProfile";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import SAProfile from "./components/SystemAdmin/SAProfile/SAProfile";
import AssignDepartment from "./components/AllUserList/AssignDepartment";
import AssignedDepartmentUser from "./components/AllDepartment/AssignedDepartmentUser";
import UserManagement from "./components/UserManagement/UserManagement";
import DepartmentManagement from "./components/DepartmentManagement/DepartmentManagement";
import ApplicationManagement from "./components/ApplicationManagement/ApplicationManagement";
import CreateNotification from "./components/Notifications/CreateNotification";
import SprintBoardList from "./components/SprintBoardList/SprintBoardList";
import CreateSprint from "./components/CreateSprint/CreateSprint";

import AOS from "aos";
import "aos/dist/aos.css";
import { setTimeout } from "timers";
import PreLoader from "./components/PreLoader/PreLoader";
AOS.init({duration: 2000});


const App = () => {
  const [userData, setUserData] = useState<any>({
    isSignedIn: false,
    co_id: "",
    id: "",
    name: "",
    company_name: "",
    email: "",
    role: "",
    created_at: "",
    updated_at: "",
  });
  const [systemAdminData, setSystemAdminData] = useState<any>({
    isSignedIn: false,
    id: "",
    name: "",
    email: "",
    phone: "",
    role: "system-admin",
    created_at: "",
    updated_at: "",
  });
const [loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])

  // for checking user
  useEffect(() => {
    checkIsLoginUser("token");
  }, []);

  // For checking that the user has already logged in or not
  const checkIsLoginUser = (token: string) => {
    const data = getDataFromLS(token);
    console.log(token);
    if (data?.user) {
      setUserData(data.user);
    }
    if (data?.admin) {
      setSystemAdminData(data.admin);
    }
  };
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <SystemAdminDataContext.Provider
        value={{ systemAdminData, setSystemAdminData }}
      >
        {loading?(<PreLoader/>):<Router>
          <Switch>
            <Route path="/pricing">
              <Navbar />
              <PricingCard />
              <Footer />
            </Route>
            <Route path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
            <Route path="/shareIdea">
              <Dashboard>
                <ShareIdea />
              </Dashboard>
            </Route>
            <PrivateRoute path="/allIdea">
              <Dashboard>
                <AllIdea />
              </Dashboard>
            </PrivateRoute>
            <Route path="/create-notification">
              <Dashboard>
                <CreateNotification />
              </Dashboard>
            </Route>
            <PrivateRoute path="/all-courses">
              <Dashboard>
                <AllCourse />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/view-course/:course_id">
                <CourseVideo />
            </PrivateRoute>
            <PrivateRoute exact path="/edit-courses/:id">
              <Dashboard>
                <EditCourse />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/edit-video/:id">
              <Dashboard>
                <AddVideo isEdit={true} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/video/:id">
              <Dashboard>
                <AddVideo isEdit={false} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/edit-video/:id">
              <Dashboard>
                <AddVideo isEdit={true} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/task/:id">
              <Dashboard>
                <AddTask isEdit={false} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/edit-task/:id">
              <Dashboard>
                <AddTask isEdit={true} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/quiz/:id">
              <Dashboard>
                <AddQuiz isEdit={false} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-courses/edit-quiz/:id">
              <Dashboard>
                <AddQuiz isEdit={true} />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-module/:id">
              <Dashboard>
                <EditModule />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/add-course">
              <Dashboard>
                 <AddCourse />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/assign-course">
              <Dashboard>
                <AssignCourse />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/quiz">
              <QuizArea />
            </PrivateRoute>
            <Route path="/activate-account">
              <Navbar />
              <UserSelftActivation />
              <Footer />
            </Route>
            <PrivateRoute path="/user-management">
              <Dashboard>
                <UserManagement />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/create-user">
              <Dashboard>
                <CreateNewUser />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-user">
              <Dashboard>
                <AllUserList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/assign-department/:userId">
              <Dashboard>
                <AssignDepartment />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/leaderBoard">
              <Dashboard>
                <LeaderBoard />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/sprint/:sprint_id">
              <Dashboard>
                <TaskBoard />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/setMeeting">
              <SetMeeting />
            </PrivateRoute>
            <PrivateRoute path="/application-management">
              <Dashboard>
                <ApplicationManagement />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/inputApplication">
              <Dashboard>
                <InputApplication />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/courseVideo">
              <CourseVideo />
            </PrivateRoute>
            <PrivateRoute path="/meetingList">
              <Dashboard>
                <MeetingList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/create-sprint">
              <Dashboard>
                <CreateSprint />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/sprint-list">
              <Dashboard>
                <SprintBoardList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/add-task/:sprint_id">
              <Dashboard>
                <CreateTask />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/applicationList">
              <Dashboard>
                <ApplicationList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/assignment">
              <AssignmentArea />
            </PrivateRoute>
            <PrivateRoute path="/feedbacks">
              <FeedBacks />
            </PrivateRoute>
            <PrivateRoute path="/home">
              <Dashboard>
                <Home />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/meetings">
              <Dashboard>
                <MeetingList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/set-meeting">
              <Dashboard>
                <SetMeeting />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-department">
              <Dashboard>
                <AllDepartment />
              </Dashboard>
            </PrivateRoute>
            <Route path="/assigned-department-user/:departmentId">
            <Dashboard>
              <AssignedDepartmentUser />
              </Dashboard>
            </Route>
            <PrivateRoute path="/department-management">
              <Dashboard>
                <DepartmentManagement />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/create-department">
              <Dashboard>
                <CreateDepartment />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/company-profile">
              <Dashboard>
                <CompanyProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/view-profile/:userId">
              <Dashboard>
                <UserProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-user-profile">
              <Dashboard>
                <EditUserProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-company-profile">
              <Dashboard>
                <EditCompanyProfile />
              </Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Navbar />
              <LoginCompany />
              <Footer />
            </Route>
            <Route path="/registration">
              <Navbar />
              <RegisterCompany />
              <Footer />
            </Route>
            <Route exact path="/user-login">
              <UserLogin />
            </Route>
            <PrivateRoute exact path="/:companyUserName/user-login">
              <UserLogin />
            </PrivateRoute>
            <Route path="/system-admin/login">
              <SystemAdminLogin />
            </Route>
            <Route path="/system-admin/activate-account">
              <Navbar />
              <SystemAdminSelftActivation />
              <Footer />
            </Route>
            <SARoute path="/system-admin/add">
              <SADashboard>
                <AddSystemAdmin />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/view-all">
              <SADashboard>
                <ViewAllAdmin />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/all-company">
              <SADashboard>
                <AllCompany />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/view-sa-profile">
              <SADashboard>
                <SAProfile />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/edit-sa-profile">
              <SADashboard>
                <EditSAProfile />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/edit-sa-profile">
              <SADashboard>
                <EditSAProfile />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/">
              <SADashboard>
                <SAHome />
              </SADashboard>
            </SARoute>
            <Route exact path="/ourTeam">
              <Navbar />
              <OurTeam />
              <Footer />
            </Route>
            <Route exact path="/">
              <MainHome />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>}
        
      </SystemAdminDataContext.Provider>
    </UserDataContext.Provider>
  );
};

export default App;
