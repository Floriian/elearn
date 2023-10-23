import {
  BookOutlined,
  DatabaseOutlined,
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
    label: "Courses",
    icon: createElement(BookOutlined),
    key: "/courses",
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
