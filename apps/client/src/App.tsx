import { AuthProvider } from "@/contexts"
import { AuthPage, Homepage } from "@/features"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route element={<AuthProvider />}>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default App
