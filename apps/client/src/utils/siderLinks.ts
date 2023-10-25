import {
  BookOutlined,
  DatabaseOutlined,
  EditOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { createElement } from "react";

export const siderLinks = [
  {
    label: "Homepage",
    icon: createElement(HomeOutlined),
    key: "/",
  },
  {
    label: "My Classes",
    icon: createElement(BookOutlined),
    key: "/class",
  },
  {
    label: "Exams",
    icon: createElement(EditOutlined),
    key: "/exam",
  },
];

export const adminSiderLinks = [
  {
    label: "Admin",
    icon: createElement(DatabaseOutlined),
    key: "/admin",
  },
  ...siderLinks,
];
