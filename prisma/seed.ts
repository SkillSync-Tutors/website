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
for (const subject of subjects) {
    await prisma.subject.upsert({
    where: { name: subject },
    update: {},
    create: { name: subject },
    })
}
console.log('Subjects seeded successfully')
}

main()
.catch((e) => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})