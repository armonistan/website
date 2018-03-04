const Posts = require('../../models/Posts');

module.exports = (app) => {
  app.get('/api/posts', (req, res, next) => {
    Posts.find()
      .exec()
      .then((posts) => res.json(posts))
      .catch((err) => next(err));
  });

  //read only right now
  //app.post('/api/counters', function (req, res, next) {
  //  const counter = new Counter();
  //
  //  counter.save()
  //    .then(() => res.json(counter))
  //    .catch((err) => next(err));
  //});

  //read only 
  //app.delete('/api/counters/:id', function (req, res, next) {
  //  Counter.findOneAndRemove({ _id: req.params.id })
  //    .exec()
  //    .then((counter) => res.json())
  //    .catch((err) => next(err));
  //});

  app.put('/api/counters/:id/loadPost', (req, res, next) => {
    Posts.findById(req.params.id)
      .exec()
	  .then((post) => res.json(post))
      .catch((err) => next(err));
  });
};
