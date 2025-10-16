import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = ({ className, decorative = true, orientation = "horizontal", ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>) => (
    <SeparatorPrimitive.Root
        className={ cn(
            "bg-border data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full shrink-0",
            className,
        ) }
        data-slot="separator"
        decorative={ decorative }
        orientation={ orientation }
        { ...props }
    />
);

export { Separator };
