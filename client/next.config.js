const withCSS = require('@zeit/next-css');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Filter out default Next.js CSS rules:
      config.module.rules = config.module.rules.filter(r => !r.oneOf);
  
      // Add your own rules
  
      config.module.rules.push({
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'scss-loader'],
      })
      return config
    },
    
    webpack(config, options) {
        return config;
    },
  }