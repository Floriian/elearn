import { Homepage } from "@/features"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes>
  )
}

export default App
