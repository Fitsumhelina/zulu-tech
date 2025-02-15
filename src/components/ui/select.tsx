"use client";

import { useState, ReactNode, createContext, useContext, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectContextProps {
  selectedValue: string | null;
  setSelectedValue: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SelectContext = createContext<SelectContextProps | null>(null);

interface SelectProps {
  onValueChange: (value: string) => void;
  value?: string;
  children: ReactNode;
}

export function Select({ onValueChange, value, children }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(value || null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ selectedValue, setSelectedValue, isOpen, setIsOpen }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
}

interface SelectTriggerProps {
  className?: string;
  children: ReactNode;
}

export function SelectTrigger({ className, children }: SelectTriggerProps) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within a Select");

  return (
    <button
      className={cn(
        "flex items-center justify-between px-4 py-2 border rounded-md w-full text-sm bg-white shadow-sm",
        className
      )}
      onClick={() => context.setIsOpen(!context.isOpen)}
    >
      {children}
      <ChevronDown className="w-4 h-4 ml-2" />
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used within a Select");

  return <span>{context.selectedValue || placeholder}</span>;
}

export function SelectContent({ children }: { children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within a Select");

  return (
    context.isOpen && (
      <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10">{children}</div>
    )
  );
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within a Select");

  const handleSelect = () => {
    context.setSelectedValue(value);
    context.setIsOpen(false);
  };

  return (
    <div
      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      onClick={handleSelect}
    >
      {children}
    </div>
  );
}
