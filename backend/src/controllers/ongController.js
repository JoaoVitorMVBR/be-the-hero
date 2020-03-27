const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (require,response) {
        const ongs = await connection('ongs').select('*');
     
      return response.json(ongs);
      },
      

async create(request,Response){
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    //console.log(data);

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return Response.json({id});
    
}

};