
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const createUser = async (event) => {

    const {email, name, balance} = JSON.parse(event.body);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            balance
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(user),
    }


};

module.exports = { 
    createUser
};