export default (app) => {
  app.get('/', (req, res, next) => {
    res.json({
      message: 'Hello'
    });
  });
};