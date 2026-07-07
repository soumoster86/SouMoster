"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Info, X, XCircle } from "lucide-react";
import type { ToastMessage } from "@/hooks/useToast";

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const colors = {
  success: "border-accent/30 bg-accent/10 text-accent",
  error: "border-red-500/30 bg-red-500/10 text-red-400",
  info: "border-primary/30 bg-primary/10 text-primary",
};

export function Toast({ toasts, onRemove }: ToastProps) {
  return (
    <div
      className="fixed top-20 right-4 z-50 flex flex-col gap-2"
      aria-live="polite"
      aria-label="Notifications"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 shadow-lg ${colors[toast.type]}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">{toast.message}</p>
              <button
                onClick={() => onRemove(toast.id)}
                className="ml-2 shrink-0 opacity-60 hover:opacity-100"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}