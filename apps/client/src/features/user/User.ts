export interface User {
  id: number;
  email: string;
  role: "admin" | "teacher" | "member";
}
