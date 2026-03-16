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
         <Route path='/teacher' element={<TeacherLayout/>}>
            <Route index element={<TeacherDashboard/>}/>
            <Route path='teacherassign' element={<Assignments/>}/>
            <Route path='teacherattn' element={<Attendance/>}/>
         </Route>
      </Routes>
    </div>
  )
}

export default App