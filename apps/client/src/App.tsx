import { store } from "@/app";
import { AuthPage, Homepage, ProtectedRoutes } from "@/features"
import { injectStore } from "@/utils";
import { Route, Routes } from "react-router-dom"

function App() {
  injectStore(store);
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default App
