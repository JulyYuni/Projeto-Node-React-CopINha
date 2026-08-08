// src/pages/Admin/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar";
import styles from "./styles.module.css";
import AdminHeader from "../../components/AdminHeader";

export default function AdminLayout() {
  return (
    <div className={styles.adminWrapper}>
      <Sidebar/>
      <main className={styles.content}>
        <AdminHeader/>
        <Outlet />
      </main>
    </div>
  );
}