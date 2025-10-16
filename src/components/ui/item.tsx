import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const ItemGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("group/item-group flex flex-col", className) } data-slot="item-group" role="list" { ...props } />
);

const ItemSeparator = ({ className, ...props }: React.ComponentProps<typeof Separator>) => (
    <Separator className={ cn("my-0", className) } data-slot="item-separator" orientation="horizontal" { ...props } />
);

const itemVariants = cva(
    "group/item flex flex-wrap items-center [a]:hover:bg-accent/50 border border-transparent focus-visible:border-ring rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 text-sm transition-colors [a]:transition-colors duration-100",
    {
        defaultVariants: {
            size: "default",
            variant: "default",
        },
        variants: {
            size: {
                default: "p-4 gap-4 ",
                sm: "py-3 px-4 gap-2.5",
            },
            variant: {
                default: "bg-transparent",
                muted: "bg-muted/50",
                outline: "border-border",
            },
        },
    },
);

const Item = ({
    asChild = false,
    className,
    size = "default",
    variant = "default",
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) => {
    const Comp = asChild ? Slot : "div";
    return <Comp className={ cn(itemVariants({ className, size, variant })) } data-size={ size } data-slot="item" data-variant={ variant } { ...props } />;
};

const itemMediaVariants = cva(
    "flex justify-center items-center group-has-[[data-slot=item-description]]/item:self-start gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 [&_svg]:pointer-events-none shrink-0",
    {
        defaultVariants: {
            variant: "default",
        },
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
                image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
            },
        },
    },
);

const ItemMedia = ({ className, variant = "default", ...props }: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) => (
    <div className={ cn(itemMediaVariants({ className, variant })) } data-slot="item-media" data-variant={ variant } { ...props } />
);

const ItemContent = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("flex flex-col flex-1 [&+[data-slot=item-content]]:flex-none gap-1", className) } data-slot="item-content" { ...props } />
);

const ItemTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("flex items-center gap-2 w-fit font-medium text-sm leading-snug", className) } data-slot="item-title" { ...props } />
);

const ItemDescription = ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
        className={ cn(
            "font-normal text-muted-foreground text-sm text-pretty leading-normal",
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
            className,
        ) }
        data-slot="item-description"
        { ...props }
    />
);

const ItemActions = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("flex items-center gap-2", className) } data-slot="item-actions" { ...props } />
);

const ItemHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("flex justify-between items-center gap-2 basis-full", className) } data-slot="item-header" { ...props } />
);

const ItemFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={ cn("flex justify-between items-center gap-2 basis-full", className) } data-slot="item-footer" { ...props } />
);

export { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle };
