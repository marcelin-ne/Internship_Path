const { testConnection } = require('./githubApi');

const baseUrl = 'https://api.github.com';
const token = process.env.GITHUB_TOKEN;

testConnection(baseUrl, token)
    .then(connectionSuccessful => {
        if (connectionSuccessful) {
            console.log('La conexión fue exitosa.');
        } else {
            console.log('La conexión falló.');
        }
    })
    .catch(error => console.error('Error:', error));
