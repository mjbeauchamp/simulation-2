module.exports = {
    get_houses: (req, res) => {
        const dbInstance = req.app.get('db');
  
        dbInstance.get_houses()
            .then( houses => {
                console.log(houses)
                res.status(200).send( houses )
            })
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)
            } );
    },
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zipcode} = req.body;

        dbInstance.create_house([name, address, city, state, zipcode])
            .then(() => {
                res.status(200).send([name, address, city, state, zipcode]);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                console.log(err)
            });
    }
}