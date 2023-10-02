module.exports = {
    
    async afterCreate(event) {

      console.log(event)

      const { result, params } = event;
      
      const comment = await strapi.entityService.create('api::comment.comment', {

        data: {

           description: result.title,
           
           post: result.id,

           publishedAt: new Date().toISOString()

       },

     });

     const ticket = await strapi.entityService.create('api::ticket.ticket', {

        data: {

           name: result.title,

           price: 100,

           status: 'active',
           
           comment: comment.id,

           publishedAt: new Date().toISOString()

       },

     });

    },
  }