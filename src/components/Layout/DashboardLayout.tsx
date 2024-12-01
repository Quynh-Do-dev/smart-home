import React from "react";
import Content from "./content";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <div className="sticky">
        <Sidebar />
      </div>
      <main className="flex-1">
        <div className="sticky">
          <Navbar />
        </div>
        <Content>{children}</Content>
      </main>
    </div>
  );
}
