const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const increaseBalance = async (event) => {

    const {userId, amount} = JSON.parse(event.body);

    const user = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            balance: {
                increment: amount
            }        
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(user),
    }
};

module.exports = { 
    increaseBalance
};