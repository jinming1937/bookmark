module.exports = {
    plugins: [],
    config: {
        exports: [
            // './scripts/index.js',
            './css/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs

            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
