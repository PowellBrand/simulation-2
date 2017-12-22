module.exports ={
    //75C
    //Properties
    create: (req, res) => {
        const db = req.app.get('db');
        db.create_property().then(()=> {
            res.status(200).send()
        }).catch(()=> res.status(500).send());
    },

    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_properties().then(()=>{
            res.status(200).send()
        }).catch(()=> res.status(500).send());
    },
    //76D
    delete: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        db.delete_property().then(()=>{
            res.status(200).send()
        }).catch(()=> res.status(500).send())
    },
    //76F
    filter: (req, res) => {
        const db = req.app.get('db');
        const {price} = req.body;
        db.filter_property().then(()=> {
            res.status(200).send()
        }).catch(()=> res.status(500).send())

    }
}