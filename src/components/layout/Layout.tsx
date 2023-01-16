import React from "react";
import Header from "@/components/layout/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
