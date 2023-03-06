const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    // process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    // ssl: true
};
const pool = new Pool(dbURL);

exports.getUserById = async (id) => {

    const results = await
        pool.query('SELECT * FROM users WHERE id=$1', [id]);
    if (results.length !== 0) {
        return results.rows[0]
    }
    return null;
}
exports.insertNewUser = async (user) => {
    await pool.query('INSERT INTO users (user_name, password, email, first_name,'
        + 'last_name, phone_number, address) VALUES ($1, $2, $3,'
        + '$4, $5, $6, $7)', [user.userName, user.password, user.email, user.firstName,
        user.lastName, user.phoneNumber, user.address]);
};


exports.getUser = async (username) => {
    const user = await 
        pool.query('SELECT * FROM users WHERE user_name=$1', [username]);
    if (user.rows.length !== 0) {
        return user.rows[0]
    }
    //if we made it here the user wasn't found
    return null;
};


exports.getUsers = (req, res) => {
    console.log('Inside getUsers');
    pool.query('SELECT id, user_name, password FROM users', (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        console.log(results.rows);
        res.status(200).json(results.rows);
    }
)}