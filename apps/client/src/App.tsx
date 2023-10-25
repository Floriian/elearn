import { AdminPage, AuthPage, Homepage, ClassPage } from "@/features"
import { ProtectedRoutes } from "@/features/auth/components/ProtectedRoutes";
import { Route, Routes } from "react-router-dom"
import { injectStore } from "@/utils";
import { store } from "./app/store/store";

import "@/styles/main.css"

function App() {
  injectStore(store)
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Homepage />} />

        <Route path="/class">
          <Route index element={<ClassPage />} />
        </Route>

        <Route path="/admin">
          <Route index element={<AdminPage />} />
          Ro</Route>
      </Route>
    </Routes>
  )
}

export default App
