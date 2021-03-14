const target = 'http://192.168.0.102:3000';

module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '^/api' : {
                target,
                changeOrigin:true
            }
        }
    }
}