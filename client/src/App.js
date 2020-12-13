import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import LoginStudent from './Auth/loginStudent/loginStudent';
import SignupStudent from './Auth/signupStudent/signupStudent';
import SignupTeacher from './Auth/signupTeacher/signupTeacher';
import LoginTeacher from './Auth/loginTeacher/loginTeacher';
import Home from './component/Home/Home'
import StudentDashboard from './component/StudentDashboard/StudentDashboard';
import TeacherDashboard from './component/TeacherDashboard/TeacherDashboard';
import FormCounselling from './component/Counsellingform/FormCounselling';
import FormDropout from './component/Dropoutform/Dropoutform';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/loginStudent' component={LoginStudent} />
        <Route path='/signupStudent' component={SignupStudent} />
        <Route path='/signupTeacher' component={SignupTeacher} />
        <Route path='/loginTeacher' component={LoginTeacher} />
        <Route path='/StudentDashboard' component={StudentDashboard} />
        <Route path='/TeacherDashboard' component={TeacherDashboard} />
        <Route path='/form1' component={FormCounselling} />
        <Route path='/form2' component={FormDropout} />
      </Switch>
    </div>
  )
}
export default App;