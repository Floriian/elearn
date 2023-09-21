import { Homepage } from "@/features"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />}></Route>
    </Routes>
  )
}

export default App
