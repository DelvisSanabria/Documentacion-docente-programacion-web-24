export const saludo = (req, res, next) => {

  const { name } = req.body
  if(!name){
    return res.status(404).json({message: 'No se envio el nombre, no pueden pasar extraños'})
  }else{
    next()
  }
}