const {createUser,getAllUsers,getUserById,editUser,deleteUser} = require('./users.controllers');

const getAll = (req,res) => {
    const data = getAllUsers()
    res.status(200).json(data)
};

const getById = (req,res) => {
    const id = req.params.id;
    const data = getUserById(id);
    if(data){
        res.status(200).json(data);
    }else{
        res.status(404).json({message:"Id not found"})
    };
};

const create = (req,res) => {

    const userData = req.body;
    const newUser = createUser(userData)
    if(newUser){
        
        res.status(201).json(userData)
    }else{
        res.status(400).json({message:"Missing data"})
    }
};

const edit = (req,res) => {
    const id = req.params.id;
    const userData = req.body;
    const newUser = editUser(id,userData);
    if(newUser){
        res.status(200).json(newUser);
    }else{
        res.status(400).json({message: "Invalid data"})
    }
    
};

const remove = (req,res) => {
    const id = req.params.id;
    const userData = getUserById(id)
    if(userData){
        deleteUser(id)
        res.status(204).json()
    }else{
        res.status(404).json({message:"Invalid Id"})
    }
    
    
}
module.exports ={
    getAll,
    getById,
    create,
    edit,
    remove
};
