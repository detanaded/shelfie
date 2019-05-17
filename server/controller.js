// =============Product Controllers- Grabbing products from DB=============//


module.exports= {
  addproduct: (req, res) => {
    // Destructure the body of the request
    const{name, price, img} = req.body
    //get db instance
    const db = req.app.get('db')
    //talk to the db to create the person
    db.add_prduct({name, price, img})
      .then(dbResponse => {
        //Send data back to client (front end)
        res.status(200).send(dbResponse)
      })
      .catch(error => {
        if(error) throw error;
      })
  },
  
  
  
  }