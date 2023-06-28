const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Adalberto",
        lastName: "Gomez",
        email: "adalberto@veremole.com",
        password: "123456",
        phone: "555-22-666"
    }

    await User.create(userCreate)

}
module.exports = user