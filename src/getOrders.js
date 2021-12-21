const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const getOrders = async (event) => {

    const orders = await prisma.order.findMany({
        include: {
            user: true
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(orders),
    }
};

module.exports = { 
    getOrders
};