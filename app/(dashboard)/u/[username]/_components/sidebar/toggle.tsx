"use client";

import { Button } from "@/components/ui/button";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export const Toggle = () => {
    const {
        collapsed,
        onCollapse,
        onExpand
    } = useCreatorSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";

    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                    <Hint label={label} side="right" asChild>
                        <Button
                            className="h-auto p-2"
                            variant="ghost"
                            onClick={onExpand}>
                            <ArrowRightFromLine
                                className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>

            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
                    <p className="font-semibold text-primary">
                        Dashboard
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button
                            className="h-auto p-2 ml-auto"
                            variant="ghost"
                            onClick={onCollapse}>
                            <ArrowLeftFromLine
                                className="h-4 w-4 " />
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    )
}