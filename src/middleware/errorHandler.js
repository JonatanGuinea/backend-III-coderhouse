


export const errorHandler = (error, req, res, next)=>{
    console.log(`Error handler acrivado : ${error.message}`);
    res.setHeader('Content-Type', 'application/json')
    return res.status(500).json({error:`Error interno de servidor :${error.message}`})
} 