import app from './app';
const port = process.env.PORT || 1234;

const start = async () => {
  try {
    await app.listen(port);
    console.info(`🚀  Server running at port: ${port}`);
  } catch (err) {
    console.error('Not able to run server');
  }
};

start();
