"use strict";


function getUsers(req, res) {
  
  try {
     res.json({
       ok: true,
       msg: 'Okay is working'
     })
  } catch (error) {
    console.log(error);
    return error
  }
   
  }


module.exports = {
  getUsers,

};
