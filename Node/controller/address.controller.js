const jwt = require("jsonwebtoken");

const Address = require('../model/address')


exports.address = (req, res) => {
    const addData = {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        photo: req.body.photo,
    }
        .then(address => {
            if (addData.address.length <= 0) {
                res.send("please enter address")
            }
            if (addData.city.length <= 0) {
                res.send("please enter city")
            }
            if (addData.state.length <= 0) {
                res.send("please enter state")
            }
            if (addData.pincode.length <= 0) {
                res.send("please enter pincode")
            }
        })
    Address.create(addData)
        .catch(e => {
            res.send("errro", e)
        })
}