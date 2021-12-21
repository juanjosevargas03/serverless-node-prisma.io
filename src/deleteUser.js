const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const deleteUser = async (event) => {

    const {id} = JSON.parse(event.body);

    const user = await prisma.user.delete({
        where: {
            id: id
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(user),
    }
};

module.exports = { 
    deleteUser
};