const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    ssl: true
};
const pool = new Pool(dbURL);

exports.getUserById = () => {
    
}

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