import React, { useEffect } from 'react'
import AdminLayout from './PAGES/Admin/AdminLayout'
import AdminDashboard from './PAGES/Admin/AdminDashboard'
import StudentManagement from './PAGES/Admin/StudentManagement'
import TeacherManagement from './PAGES/Admin/TeacherManagement'
import CourseManagement from './PAGES/Admin/CourseManagement'
import { Route, Routes } from 'react-router-dom'
import TeacherLayout from './PAGES/Teacher/TeacherLayout'
import TeacherDashboard from './PAGES/Teacher/TeacherDashboard'
import Assignments from './PAGES/Teacher/Assignments'
import Attendance from './PAGES/Teacher/Attendance'
import StudentLayout from './PAGES/Student/StudentLayout'
import StudentDashboard from './PAGES/Student/StudentDashboard'
import StudentResult from './PAGES/Student/StudentResult'

const App = () => {
  //   useEffect(() => {
  //   localStorage.clear();
  // }, []);

  return (
    <div>
      <p></p>
      <Routes>
         <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='studentmng' element={<StudentManagement/>}/>
            <Route path='teachermng' element={<TeacherManagement/>}/>
            <Route path='coursemng' element={<CourseManagement/>}/>
         </Route>
         <Route path='/teacher' element={<TeacherLayout/>}>
            <Route index element={<TeacherDashboard/>}/>
            <Route path='teacherassign' element={<Assignments/>}/>
            <Route path='teacherattn' element={<Attendance/>}/>
         </Route>
         <Route path='/student' element={<StudentLayout/>}>
            <Route index element={<StudentDashboard/>}/>
            <Route path='stuassign' element={<Assignments/>}/>
            <Route path='stuattn' element={<Attendance/>}/>
            <Route path='sturesult' element={<StudentResult/>}/>
         </Route>
      </Routes>
    </div>
  )
}

export default App