const con = require('../routes');
const create = (req, res) => {
    const { numero, idpedido, idforn, idtelefone, idcliente, total} = req.body;
    con.query('INSERT INTO projetocantina (numero, idforn, idtelefone, idcliente) VALUES (?, ?)',
        [numero, idforn, idtelefone, idcliente],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, numero, idforn, idtelefone, idcliente});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM telefone', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    const {idpedido, idcliente, idprod, idtelefone} = req.body;
    con.query(`UPDATE telefone SET idpedido = ?, idcliente = ?, idprod = ?, idtelefone = ?,  WHERE idpedido = ?`,
        [idpedido, idcliente, idprod, idtelefone],
        (err, result) => {
            if (err) {
                res.status(500).json({ mensagem: 'Erro ao atualizar telefone', erro: err });
            } else {
                res.status(202).json(result);
            }
        });
};

const del = (req, res) => {
    con.query('DELETE FROM telefone WHERE idpedido = ?', [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ mensagem: 'Erro ao buscar pedidos', erro: err });
        } else {
            res.status(204).json(result);
        }
    });
};
module.exports = { create, read, update, del };