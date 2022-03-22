
"use strict";


function getUsers(req, res) {
  
  try {
     res.json({
       ok: true,
       msg: 'Perfect deployment 100%'
     })
  } catch (error) {
    console.log(error);
    return error
  }
   
  }
//

module.exports = {
  getUsers,

};

