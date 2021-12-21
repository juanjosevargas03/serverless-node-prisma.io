const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const deleteOrder = async (event) => {

    const {id} = JSON.parse(event.body);

    const order = await prisma.order.delete({
        where: {
            id: id
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(order),
    }
};

module.exports = { 
    deleteOrder
};