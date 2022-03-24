
"use strict";


function getUsers(req, res) {
  
  try {
     res.json({
       ok: true,

       msg: 'Joob is working 100% perfectly!'
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

