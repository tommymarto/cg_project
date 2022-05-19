const config = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    'source-map-loader',
                ]
            }
        ],
    }
};

export default config;