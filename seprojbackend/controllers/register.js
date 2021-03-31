const handleRegister = (req,res,db) =>{
    const {name,email,password,phoneNumber} = req.body;
    
    if(!(email && name && password && phoneNumber)){
        console.log(name,email,password,phoneNumber)
        return res.status(400).json("Empty values not accepted")
    }

    /*db('teachers').insert({
        name:name,
        email:email,
        phonenumber:phoneNumber,
        password:password
    })
    .then( data=>{
        res.send(data[0])

    } )
    .catch(err=>res.status(400).json('unable to register !!'))*/

    db.transaction(trx =>{
        trx.insert({
            name:name,
            email:email,
            phonenumber:phoneNumber,
            password:password
        })
        .into('teachers')
        //.returning('name')  
        .then( data=>{
            //console.log("success")
            res.send({
                name:name,
            email:email,
            phonenumber:phoneNumber,
            password:password
            })
        }
     ) 
    .then(trx.commit)
    .catch(trx.rollback)
    
    })
    .catch(err=>res.status(400).json('unable to register !!'))





    /*db('teachers').insert({
            name:name,
            email:email,
            phoneNumber:phoneNumber,
            password:password
            
        })
        
        .returning('name')
        .then(data=>{
            console.log('success')
            console.log(data[0])
            res.send(data[0])
        })
        .catch(err=>{
            console.log("sss")
            res.status(400).json('unable to register !!')
        })*/
    

    
}

module.exports ={
    handleRegister: handleRegister
}