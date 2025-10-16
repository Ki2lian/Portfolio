"use client";

import { useIsClient } from "@uidotdev/usehooks";
import React from "react";

interface IClientOnlyProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export const ClientOnly = ({ children, fallback = null }: IClientOnlyProps) => {
    const isClient = useIsClient();

    return <>{isClient ? children : fallback}</>;
};
