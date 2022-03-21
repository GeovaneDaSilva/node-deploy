"use strict";


function getUsers(req, res) {
  
  try {
     res.json({
       ok: true,
       msg: 'Okay is working perfect Production everthing is good #######78'
     })
  } catch (error) {
    console.log(error);
    return error
  }
   
  }


module.exports = {
  getUsers,

};
