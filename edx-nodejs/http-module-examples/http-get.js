const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url, (response) => {
    let rawData = ''
    response.on('data', (chunk) => {
        rawData += chunk
    })
    response.on('end', () => {
        console.log('Raw data:', rawData)
    })
}).on('error', (error) => {
    console.log(`Got error ${error.message}`)
})
