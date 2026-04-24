import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Navigation } from "./components/navigation"
import { Toaster } from "react-hot-toast"

import { TasksPage } from "./pages/TaskPage"
import { TasksFormPage } from "./pages/TaskFormPage"

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
    <Navigation/>
    <Routes>
      <Route path="/" element={<Navigate to="/tasks"/>}/>
      <Route path="/tasks" element={<TasksPage/>} />,
      <Route path="/tasks-create" element={<TasksFormPage/>} />
      <Route path="/tasks/:id" element={<TasksFormPage/>} />
    </Routes>
    <Toaster/>
    </div>
    </BrowserRouter>
  )
}

export default App