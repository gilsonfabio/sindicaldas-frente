module.exports = {
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            {key: 'Access-Control-Allow-Origin', value: '*'},
            {key: 'Access-Control-Allow-Methods', value: 'GET, PUT, POST, DELETE'},
            {key: 'Access-Control-Allow-Headers', value: 'X-PINGOTHER, Content-Type, Authorization'},
          ],
        },
      ]
    },
  }