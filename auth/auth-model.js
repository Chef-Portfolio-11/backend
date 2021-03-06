const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy,
    findById, 
    add,
    update,
    remove
}

function find () {
    return db('users');
};

function findBy(users) {
    return db('users').where(users);
}

function findById (id) {
    return db('users')
    .where('id', id)
};

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
        const [id] = ids;
        return findById(id);
        });
    }



function update(changes, id) {
    return db('users')
    .where('id' , id)
    .update(changes)
    .then(count => {
    count > 0 ? findById(id) : null
    });
};

function remove (id) {
    return db('users')
    .where('id' , id)
    .del();
};