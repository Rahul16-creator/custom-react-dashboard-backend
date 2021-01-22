//importing the data from another file
const data=require('../data/report_data');

// method will return the data to client
exports.fetch_data=(req,res,next)=>{
  res.send(data)
}