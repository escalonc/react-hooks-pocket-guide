import React from "react";

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return <h1 className="mb-3 font-bold text-xl">{children}</h1>;
}
