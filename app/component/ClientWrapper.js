// app/component/ClientWrapper.js (or .tsx)
"use client";
import { usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  // Define which routes should show the sidebar
  const adminRoutes = ["/admin/users", "/admin/usersDetail", "/admin/settings"]; // Add all your admin routes here

  const showSidebar = adminRoutes.some((route) => pathname.startsWith(route));
  return (
    <div className="flex">
      {showSidebar && <AdminSidebar />}  {/* Changed from <Sidebar /> to <AdminSidebar /> */}
      <div className="flex-1">{children}</div>
    </div>
  );

}
