// url: http://localhost:3000/api/posts
//@ts-nocheck

import {prismadb} from '../../../../libs/prismadb'
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const posts = await prismadb.post.findMany()
        return NextResponse.json(posts, {status: 200})
        
    } catch (error) {
        return NextResponse.json({message: 'could not fatch posts', error}, {status: 500})
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const newPost = await prismadb.post.create({
            data: {
                title: body.title,
                content: body.content,
                tagId: body.tagId
            }
        })

        return NextResponse.json(newPost)        
        
    } catch (error) {
        return NextResponse.json({message: 'could not create posts', error}, {status: 500})
    }
}