const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const transferMoney = async (event) => {

    const {sending_userId,receiving_userId, amount} = JSON.parse(event.body);

    const sending_user = await prisma.user.update({
        where: {
            id: sending_userId
        },
        data: {
            balance: {
                decrement: amount
            }        
        }
    })

    const receiving_user = await prisma.user.update({
        where: {
            id: receiving_userId
        },
        data: {
            balance: {
                increment: amount
            }        
        }
    }) 

    return {
        statusCode: 200,
        body: JSON.stringify([sending_user,receiving_user,{amount: amount}]),
    }
};

module.exports = { 
    transferMoney
};