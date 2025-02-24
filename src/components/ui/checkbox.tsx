"use client "


// File: src/components/ui/checkbox.tsx

import React, { ForwardedRef } from 'react';

interface CheckboxProps {
  className?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  [key: string]: any;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, checked, onCheckedChange, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
      checked={checked}
      onChange={() => onCheckedChange(!checked)}
      ref={ref}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
