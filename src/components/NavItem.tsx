import React from "react";

interface NavItemProps {
  children: string;
}

export default function NavItem({ children: text }: NavItemProps) {
  return <li className="p-5 hover:bg-sky-600">{text}</li>;
}
