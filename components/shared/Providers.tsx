"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useToast } from "@/hooks/useToast";
import { Toast } from "./Toast";

interface ToastContextType {
  addToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToastContext must be used within Providers");
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Toast toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}