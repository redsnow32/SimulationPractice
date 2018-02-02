let users = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        console.log(req)
        app.get('/api/users',(req,res)=> {
            res.status(200).json(users)
        })
    },
    read: (req, res) => {
        app.get('/api/users',(req,res)=>{
            res.status(200).json(users)
        })

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}
