import { getRecomended } from "@/lib/recommended-service";
import { Recomended, RecomendedSkeleton } from "./recommended"
import { Toggle, ToggleSkeleton } from "./toggle"
import { Wrapper } from "./wrapper"
import { getFollowedUsers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar = async () => {
    const recommended = await getRecomended();
    const following = await getFollowedUsers();

    return (
        <Wrapper>
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Following data={following}/>
                <Recomended data={recommended} />
            </div>
        </Wrapper>
    )
}

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35]">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecomendedSkeleton />
        </aside>
    )
}