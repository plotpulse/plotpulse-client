
import * as replyAPI from './reply-api'

export async function getReplies(promptId: number) {
    try {
        const allReplies = await replyAPI.getAll(promptId)
        return allReplies


    } catch (error) {
        console.log(error)
        throw new Error('Could not fetch replies.')

    }
}

export async function createReply(promptId: number, newReply: {}) {

    try {
        const replyResponse = await replyAPI.create(promptId, newReply)
        return replyResponse

    } catch (error) {
        console.log(error)
        throw new Error('Could not create reply')


    }
}