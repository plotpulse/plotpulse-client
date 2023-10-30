
import * as replyAPI from './reply-api'

export async function getReplies(token: string, promptId: number) {
    try {
        const allReplies = await replyAPI.getAll(token, promptId)
        return allReplies


    } catch (error) {
        console.log(error)
        throw new Error('Could not fetch replies.')

    }
}

export async function createReply(token: string, promptId: number, newReply: {}) {

    try {
        const replyResponse = await replyAPI.create(token, promptId, newReply)
        return replyResponse

    } catch (error) {
        console.log(error)
        throw new Error('Could not create reply')


    }
}