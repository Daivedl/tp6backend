const router = require('express').Router();

const { Instrumento } = require('../../db');

router.get('/', async (req, res) => {

    const instrumentos = await Instrumento.findAll();
    res.json(instrumentos);
});

router.post('/', async (req, res)=>{
    const instrumento = await Instrumento.create(req.body);
    res.json(instrumento);
});

router.put('/:instrumentoId', async (req,res) => {
    await Instrumento.update(req.body, {
        where: { id: req.params.instrumentoId}
    });
    res.json ({ succes: 'Se ha modificado'});
});
// VER CONTROLLADOR
router.delete('/:instrumentoId', async (req, res) => {
    await Instrumento.destroy({
        where: { id: req.params.instrumentoId }
    });
    res.json({ succes: 'Se ha borrado el instrumento' })
});

module.exports = router;