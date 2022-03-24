
"use strict";


function getUsers(req, res) {
  
  try {
     res.json({
       ok: true,
       msg: 'Perfect deployment 100% Work with jenkins in the other computer'
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

