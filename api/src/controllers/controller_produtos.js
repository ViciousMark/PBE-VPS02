const con = require('../routes');
const create = (req, res) => {
    const { descricao, preco, idforn, idprod, validade} = req.body;
    con.query('INSERT INTO projetocantina (descricao, preco, idforn, idprod, validade) VALUES (?, ?)',
        [descricao, preco, idforn, idprod, validade],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, descricao, preco, idforn, idprod, validade});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM produtos', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    const {idprod, idforn} = req.body;
    con.query(`UPDATE produtos SET idprod = ?, idforn = ? WHERE idproduto = ?`,
        [idprod, idforn],
        (err, result) => {
            if (err) {
                res.status(500).json({ mensagem: 'Erro ao atualizar pedidos', erro: err });
            } else {
                res.status(202).json(result);
            }
        });
};

const del = (req, res) => {
    con.query('DELETE FROM produtos WHERE idprodutos = ?', [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ mensagem: 'Erro ao buscar pedidos', erro: err });
        } else {
            res.status(204).json(result);
        }
    });
};
module.exports = { create, read, update, del };