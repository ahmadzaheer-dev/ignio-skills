import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Homepage from "./components/Homepage";
import MentorDashboard from "./components/MentorComponents/MentorDashboard";
import CourseView from "./components/MentorComponents/CourseViewMentor";
import StudentDashboard from "./components/StudentComponents/Dashboard";
<<<<<<< HEAD
import Join from "./components/Chatbox/Join";
import Chat from "./components/Chatbox/Chat";
=======
import Dashboard from "./components/MentorComponents/Dashboard";
>>>>>>> 450c60e00db7742c305c2c8fb119674111dbef2d

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/mentor" component={MentorDashboard} />
          <Route path="/student" component={StudentDashboard} />
<<<<<<< HEAD
          <Route path="/join" component={Join} exact />
          <Route path="/chat" component={Chat} />

=======
          <Route path="/mentordashboard" component={Dashboard} />
          <Route path="/editcourse/:id" component={CourseView} />
>>>>>>> 450c60e00db7742c305c2c8fb119674111dbef2d
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
