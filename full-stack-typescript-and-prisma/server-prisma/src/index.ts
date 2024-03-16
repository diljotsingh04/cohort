import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'gagan',
            email: 'gagan@singh.com',
            password: 'gagan'
        },
    })

    const allUsers = await prisma.user.findMany({})

    console.dir(allUsers, { depth: null })
}

main();