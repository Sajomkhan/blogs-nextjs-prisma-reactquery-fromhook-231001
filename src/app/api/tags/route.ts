// url: http://localhost:3000/api/tags
//@ts-nocheck

import {prismadb} from '../../../libs/prismadb'
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const tags = await prismadb.tag.findMany()
        return NextResponse.json(tags, {status: 200})
        
    } catch (error) {
        return NextResponse.json({message: 'could not fatch tags', error}, {status: 500})
    }
}

export async function POST(request) {
    try {
        const body = await request.json()
        const {id, name} = body

        const newTag = await prismadb.tag.create({
            data: {
                id,
                name
            }
        })

        return NextResponse.json(newTag)        
        
    } catch (error) {
        return NextResponse.json({message: 'could not cteate tags', error}, {status: 500})
    }
}