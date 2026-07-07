"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div key={index} className="glass rounded-xl overflow-hidden">
          <button
            className="hover-surface flex w-full items-center justify-between px-6 py-4 text-left font-medium text-text transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            {item.question}
            <ChevronDown
              className={cn(
                "h-5 w-5 text-muted transition-transform duration-200",
                openIndex === index && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`accordion-content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="px-6 pb-4 text-muted leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}