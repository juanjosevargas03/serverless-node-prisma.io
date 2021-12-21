
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const getUsers = async (event) => {

    const users = await prisma.user.findMany()

    return {
        statusCode: 200,
        body: JSON.stringify(users),
    }
};

module.exports = { 
    getUsers
};