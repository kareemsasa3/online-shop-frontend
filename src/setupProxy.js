const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // Replace with your backend URL
      changeOrigin: true,
    })
  );

  // Exclude paths like /src/styles from proxying
  app.use(
    ['/src/styles'], // Add other paths as needed
    createProxyMiddleware({
      target: 'http://localhost:3000', // Or any target that suits your needs
      changeOrigin: false, // Change to true if needed
    })
  );
};
