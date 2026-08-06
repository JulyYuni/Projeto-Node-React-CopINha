// src/pages/Admin/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar";
import styles from "./styles.module.css";

export default function AdminLayout() {
  return (
    <div className={styles.adminWrapper}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}