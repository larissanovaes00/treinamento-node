module.exports = (app) => {

  const get = (req, res) => {
    app.db('filmes')
      .then((filmes) => res.status(200).json(filmes))
      .catch(err => res.status(500).json(err))
  }

  const save = (req, res) => {
    const movie = req.body
    app.db('filmes')
      .insert(movie)
      .then((data) => res.status(201).json(data))
      .catch(err => res.status(500).json(err))
  }


  const getById = (req, res) => {
    const id = req.params.id
    app.db('filmes')
      .where({ id: id })
      .first()
      .then(filme => res.status(200).json(filme))
  }

  const put = (req, res) => {
    const id = req.params.id
    const filme = req.body
    app.db('filmes')
      .update(filme)
      .where({ id: id })
      .then((data) => res.status(200).json(data))
      .catch(err => res.status(500).json(err))
  }

  const remove = (req, res) => {
    const id = req.params.id
    try {
      const register = app.db('filmes')
        .where({ id: id })
        .del()
      if (register) {
        res.status(404).json()
      }
    } catch(err){
      res.status(500).json(err)
    }
  }

  return { get, save, getById, put, remove }

}