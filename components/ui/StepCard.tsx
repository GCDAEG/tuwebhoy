// components/ui/StepCard.tsx
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type StepCardProps = {
  number: number | string;
  title: string;
  description: string;
  tip?: string;
  className?: string;
};

export function StepCard({
  number,
  title,
  description,
  tip,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        `
        relative flex h-full max-w-xl flex-col
        rounded-xl border border-border
        bg-card
        shadow-sm
        overflow-hidden
        `,
        className,
      )}
    >
      {/* Header */}
      <div
        className="
          flex items-center gap-4
          border-b border-border
         
        "
      >
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xs
            bg-primary/10
            text-primary
            font-bold text-xl
            
          "
        >
          {number}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-foreground ">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 px-4 py-4">
        <p className="text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>

        {/* Tip */}
        {tip && (
          <div
            className="
              mt-auto inline-flex items-center gap-2
              rounded-lg
              bg-primary/5
              px-3 py-2
              text-sm text-primary
            "
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span className="font-medium">Tip:</span>
            <span>{tip}</span>
          </div>
        )}
      </div>
    </div>
  );
}
