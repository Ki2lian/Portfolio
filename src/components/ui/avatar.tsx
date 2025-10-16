import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) => (
    <AvatarPrimitive.Root className={ cn("relative flex rounded-full size-8 overflow-hidden shrink-0", className) } data-slot="avatar" { ...props } />
);

const AvatarImage = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) => (
    <AvatarPrimitive.Image className={ cn("size-full aspect-square", className) } data-slot="avatar-image" { ...props } />
);

const AvatarFallback = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => (
    <AvatarPrimitive.Fallback
        className={ cn("flex justify-center items-center bg-muted rounded-full size-full", className) }
        data-slot="avatar-fallback"
        { ...props }
    />
);

export { Avatar, AvatarFallback, AvatarImage };
