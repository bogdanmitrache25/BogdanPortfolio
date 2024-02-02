module.exports = {
  images: {
    unoptimized: true,
  },
};

// next.config.js

module.exports = {
  reactStrictMode: true,
  distDir: "dist",
  output: {
    // Configura la exportación estática
    export: true,
  },
};
