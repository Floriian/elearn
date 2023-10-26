import { AdminPage, AuthPage, Homepage, ClassPage, ClassDetails } from "@/features"
import { ProtectedRoutes } from "@/features/auth/components/ProtectedRoutes";
import { Route, Routes } from "react-router-dom"
import { injectStore } from "@/utils";
import { store } from "./app/store/store";

import "@/styles/main.css"
import { NotFound } from "@/components";

function App() {
  injectStore(store)
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Homepage />} />

        <Route path="/class">
          <Route index element={<ClassPage />} />
          <Route path=":id" element={<ClassDetails />} />
        </Route>

        <Route path="/admin">
          <Route index element={<AdminPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
