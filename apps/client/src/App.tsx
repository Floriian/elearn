import { AuthPage } from "@/features"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}

export default App
