const errorHandler = (err, req,res,next)=>{
console.log(err)
    res.status(500).json({
              message: 'server error',
              err:err.message
          })
}

module.exports = errorHandler