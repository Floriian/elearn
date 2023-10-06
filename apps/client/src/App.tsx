import { store } from "@/app";
import { AuthPage, Homepage } from "@/features"
import { ProtectedRoutes } from "@/features/auth/components/ProtectedRoutes";
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
