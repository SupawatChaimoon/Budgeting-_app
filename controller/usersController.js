const db = require("../config/db");
const mySqlPool = require("../config/db");

//GET ALL USERS
const getUsers = async (req,res) => {
    try {
        const data = await db.query(' SELECT * FROM users')
        if(!data){
            return res.status(404).send({
                success:false,
                message:'No Recond Found'
            })
        }
        res.status(200).send({
            success:true,
            message:'All Pocket Recond',
            data: data[0]
        })
    } catch (error) {
        console.log(error)
        res.status(500),send({
            success:false,
            message:'Error in Get All Pocket API',
            error
        })
    }
};


//GET USER BY ID
const getUserById = async (req, res) => {
        try {
            const userId = req.params.id
            if(!userId) {
                return res.status(404),send({
                    success:false,
                    message:'Invalid or Provide User id'
                })
            }
        const data = await db.query(`SELECT * FROM users WHERE id=?`,[userId])
            if(!data){
                return res.status(404).send({
                    success:false,
                    message:'no Reconds found'
                })
            }
            res.status(200).send({
                success:true,
                userDetails:data[0]
            })
        } catch (error) {
            console.log(error)
            res.status(500),send({
                success:false,
                message:'Error in Get User By ID',
                error
            })
        }
};
module.exports = {getUsers, getUserById};

