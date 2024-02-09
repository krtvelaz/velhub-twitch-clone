"use server";

import { revalidatePath } from "next/cache";
import { blockUser, unblockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
    try {
        const blockedUser = await blockUser(id);
        revalidatePath(`/`);
        if (blockedUser) {
            revalidatePath(`/${blockedUser.blocked.username}`);
        }
        return blockedUser;
    } catch (error) {
        throw new Error("Failed to block this user");
    }
}
export const onUnBlock = async (id: string) => {
    try {
        const unBlockedUser = await unblockUser(id);
        revalidatePath(`/`);
        if(unBlockedUser){
            revalidatePath(`/${unBlockedUser.blocked.username}`);
        }
        return unBlockedUser
    } catch (error) {
        throw new Error("Failed to unblock this user");
    }
}