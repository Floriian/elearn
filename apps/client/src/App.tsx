import { AuthProvider } from "@/contexts"
import { AuthPage } from "@/features"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route element={<AuthProvider />}>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<h1>Homepage</h1>} />
      </Route>
    </Routes>
  )
}

export default App
