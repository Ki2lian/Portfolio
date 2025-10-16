import { cn } from "@/lib/utils";

const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("bg-accent rounded-md animate-pulse", className) } data-slot="skeleton" { ...props } />
);

export { Skeleton };
