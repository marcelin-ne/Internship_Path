const { testConnection, getRepositories,saveJsonToFile } = require('./githubApi');

const baseUrl = 'https://api.github.com';
const token = process.env.GITHUB_TOKEN;
const baseUrlOrg = 'https://api.github.com/orgs/stackbuilders';
const org_Name = 'stackbuilders';

testConnection(baseUrl, token)
    .then(connectionSuccessful => {
        if (connectionSuccessful) {
            console.log('La conexión fue exitosa.');
        } else {
            console.log('La conexión falló.');
        }
    })
    .catch(error => console.error('Error:', error));

    getRepositories(org_Name, baseUrlOrg)
    .then(repositories => {
        if (repositories) {
            console.log('Repositories:', repositories);
            saveJsonToFile(repositories,"repositories.json");
        } else {
            console.log('No se pudieron obtener los repositorios.');
        }
    })
    .catch(error => console.error('Error fetching repositories:', error.message));
