const userShema = require('../../models/userShema');

const queryMembers = async(req,res) => {
    console.log('ss')
    try {
        const dataUser = [];
        userShema.find({},(err,result) => {
            result.forEach((el,i) => {
                dataUser.push({id:el.id,login:el.login,posts:el.posts})
            })
            res.status(200).json({
                dataAllMember:dataUser
            })
        })
    }catch(err) {
        throw err;
    }
}

module.exports = queryMembers;