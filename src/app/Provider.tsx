"use client";
import { store } from "@/store";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ChildrenProps {
  children: ReactNode;
}

const Providers = ({ children }: ChildrenProps) => {
  return <ThemeProvider attribute="class">
    <Provider store = {store}>
    {children}
    </Provider>
  </ThemeProvider>;
};

export default Providers;
