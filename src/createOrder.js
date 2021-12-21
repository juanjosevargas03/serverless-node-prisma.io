
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const createOrder = async (event) => {

    const {userId, amount} = JSON.parse(event.body);

    const order = await prisma.order.create({
        data: {
            user: {
                connect: {
                    id: userId
                }
            },
            amount 
        }
    })

     await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            balance: {
                decrement: amount
            }        
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(order),
    }
};

module.exports = { 
    createOrder
};