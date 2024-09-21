
export const getUser = (req, res) => {
  //requerimos un valor cambiante por query params
  const { name } = req.query
  res.status(200).json({message: `Estamos obteniendo la informacion del usuario ${name}`});
}

export const users2 = (req, res) => {
  const {id} = req.params
  res.status(200).json({message: `Estamos obteniendo la informacion del usuario con ID: ${id}`});
}