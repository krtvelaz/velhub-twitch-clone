import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";

import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserPageProps {
    params: {
        username: string;
    }
}
const UserPage = async ({ params }: UserPageProps) => {
    const user = await getUserByUsername(params.username);
    if (!user) {
        return notFound();
    }
    const isFollowing = await isFollowingUser(user.id);
    const isBlockedByThisUser = await isBlockedByUser(user.id);
    // if(isBlockedByThisUser){
    //     notFound();
    // }
    return (
        <div className="flex flex-col gap-y-4">
            <p>Username: {user.username}</p>
            <p>UserId: {user.id}</p>
            <p>is following: {isFollowing ? "Yes" : "No"}</p>
            <p>is Blocked by this user: {isBlockedByThisUser?"Yes":"No"}</p>
            <Actions isFollowing={isFollowing} userId={user.id}/>
        </div>
    )
}
export default UserPage;