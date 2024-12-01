import React from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({
  children,
}: LandingLayoutProps): JSX.Element {
  return <div className="Landing-layout h-full">{children}</div>;
}
