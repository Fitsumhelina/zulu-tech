import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure you have a utility function for classNames

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // The current progress value (0 to 100)
  max?: number; // The maximum value (default is 100)
  className?: string; // Optional custom class names
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, className, ...props }, ref) => {
    // Calculate the width percentage based on the value and max
    const width = `${(value / max) * 100}%`;

    return (
      <div
        ref={ref}
        className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-200", className)}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ width }} // Set the width dynamically
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };   