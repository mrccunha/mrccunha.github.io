module.exports = () => {
    const app = express();
    
    
    
    require('../api/routes/customerWallets')(app);
  
    return app;
  };