const userDB = [];
let id = 1

//User data
// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

//to get all users
const getAllUsers = () => {
    return(userDB)
};
//To create new user
const createUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    };
if(newUser.first_name && newUser.last_name && newUser.email && newUser.password && newUser.birthday){
    userDB.push(newUser)
return(newUser);
}else{
    return false
}

};
// to get one user by id
const getUserById = (id) => {
    const filteredUser = userDB.find(user => user.id == id)
    return(filteredUser)
};

//to edit user info
const editUser = (id,obj) => {
    const filteredUser = userDB.find(user => user.id == id)
    const userIndex = userDB.indexOf(filteredUser);
    const newUser = {
        id: filteredUser.id,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: filteredUser.email,
        password: obj.password,
        birthday: obj.birthday,
    };
    if(filteredUser && newUser.first_name && newUser.last_name && newUser.password && newUser.birthday){
        userDB.splice(userIndex,1,newUser);
        return newUser;
    }else{
        return false
    }
    
};

//to delete a user
const deleteUser = (id) => {
    const filteredUser = userDB.find(user => user.id == id)
    const userIndex = userDB.indexOf(filteredUser);
    userDB.splice(userIndex,1);
    return true
};


module.exports = {createUser, getAllUsers,getUserById,editUser, deleteUser};