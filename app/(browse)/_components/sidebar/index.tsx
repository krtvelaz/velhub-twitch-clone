import { getRecomended } from "@/lib/recommended-service";
import { Recomended, RecomendedSkeleton } from "./recommended"
import { Toggle } from "./toggle"
import { Wrapper } from "./wrapper"

export const Sidebar = async () => {
    const recommended = await getRecomended();

    return (
        <Wrapper>
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recomended data={recommended} />
            </div>
        </Wrapper>
    )
}

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35]">
            <RecomendedSkeleton />
        </aside>
    )
}