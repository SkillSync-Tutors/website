import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const subjects = [
    "English",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Physics",
    "Computer Science",
  ];

async function main() {
    // Seed subjects
    for (const subject of subjects) {
        await prisma.subject.upsert({
        where: { name: subject },
        update: {},
        create: { name: subject },
        })
    }
    console.log('Subjects seeded successfully')

    // Create admin user
    // const adminUser = await prisma.user.upsert({
    //     where: { email: 'edwarddgao@gmail.com' },
    //     update: {},
    //     create: {
    //     email: 'edwarddgao@gmail.com',
    //     name: 'Edward Gao',
    //     userType: 'ADMIN',
    //     // You may want to add other fields here as needed
    //     },
    // })
    // console.log(`Admin user created with id: ${adminUser.id}`)
}

main()
.catch((e) => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})