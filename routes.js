
module.exports = (app) => {
  app.route("/movies")
    .get(app.api.movies.get)
    .post(app.api.movies.save)

  app.route("/:id")
    .get(app.api.movies.getById)
    .put(app.api.movies.put)
    .delete(app.api.movies.remove)
}