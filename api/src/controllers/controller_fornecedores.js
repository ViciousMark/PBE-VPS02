const con = require('../routes');
const create = (req, res) => {
    const { nome, idforn, cnpj, email} = req.body;
    con.query('INSERT INTO projetocantina (nome, idforn, cnpj, email) VALUES (?, ?)',
        [nome, idforn, cnpj, email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome, idforn, cnpj, email});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM fornecedores', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    let nome = req.body.nome; 
    let cnpj = req.body.cnpj; 
    let email = req.body.email; 
   

    let query = `UPDATE fornecedores set nome='${nome}', cnpj='${cnpj}', email='${email}' WHERE idforn = ? `
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const del = (req, res) => {
    let idforn = req.params.idforn; 
    let query = `DELETE FROM fornecedores WHERE idforn = ?`;

    con.query(query, [idforn], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Fornecedor não encontrado' });
        } else {
            res.status(204).send(); 
        }
    });
}
module.exports = { create, read, update, del };