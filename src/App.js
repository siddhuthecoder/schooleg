import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Class from './pages/Class';
import Notice from './pages/Notice';
import Reminder from './pages/Remainder';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Parents from './pages/Parents';
import Driver from './pages/Driver';
import Helper from './pages/Helper';
import Circular from './pages/Circular';
import Result from './pages/Result';
import TimeTable from './pages/TimeTable';
import Activity from './pages/Activity';
import Leave from './pages/Leave';
import Holiday from './pages/Holiday';
import Complain from './pages/Complain';
import Fee from './pages/Fee';
import FeeCompletion from './pages/FeeCompletion';
import Bus from './pages/Bus';
import Request from './pages/Erequest';
import Banners from './pages/Banners';
import StudentDashboard from './pages/StudentDashboard';
// import SelectedActivity from './pages/SelectedActivity';
import Vehicles from './pages/Vehicles';
import SelectedActivity from './pages/SelectedActivity';
import TeacherDashboards from './pages/TeacherDashboards';
import TeacherTimeTables from './pages/TeacherTimeTables';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Class />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/parent" element={<Parents />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/helper" element={<Helper />} />
          <Route path="/circular" element={<Circular />} />
          <Route path="/result" element={<Result />} />
          <Route path="/time-table" element={<TimeTable/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/leave" element={<Leave/>} />
          <Route path="/holiday" element={<Holiday/>} />
          <Route path="/complain" element={<Complain/>} />
          <Route path="/fee" element={<Fee/>} />
          <Route path="/fee-completion" element={<FeeCompletion/>} />
          <Route path="/bus" element={<Bus/>} />
          <Route path="/request" element={<Request/>} />
          <Route path="/banner" element={<Banners/>} />
          <Route path="/selected-activity" element={<SelectedActivity/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
          <Route path="/studentdashboard" element={<StudentDashboard/>} />
          <Route path="/teacherdashboard" element={<TeacherDashboards/>} />
          <Route path="/teachertimetable" element={<TeacherTimeTables/>} />

          {/* <Route path="/homework" element={<Homeworks />} /> */}










          {/* Add more routes here as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
