import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecomended = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const users = db.user.findMany({
        orderBy: {
            createdAt: "desc"
        },
    })
    return users;
}
