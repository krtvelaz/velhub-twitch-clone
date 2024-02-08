import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecomended = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    let userId;
    try {
        userId = (await getSelf()).id;
    } catch (e) {
        userId = null;
    }
    let users = [];
    if (userId) {
        users = await db.user.findMany({
            where: {
                AND: [{
                    NOT: {
                        id: userId
                    }
                }, {
                    NOT: {
                        followedBy: {
                            some: {
                                followerId: userId
                            }
                        }
                    }
                }],
            },
            orderBy: {
                createdAt: "desc"
            },
        })
    } else {
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
        })
    }
    return users;
}
