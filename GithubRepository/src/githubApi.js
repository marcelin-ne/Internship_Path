const fs = require('fs');
class GitHubClient {
    constructor() {
        this.token = process.env.GITHUB_TOKEN;;
        this.baseUrl = 'https://api.github.com';
    }

    async testConnection() {
        if (!this.token) {
            console.error('No se ha proporcionado un token de acceso. Configure la variable de entorno GITHUB_TOKEN.');
            return false;
        }

        try {
            const response = await fetch(`${this.baseUrl}/user`, {
                headers: {
                    Authorization: `token ${this.token}`
                }
            });

            if (response.ok) {
                const userData = await response.json();
                console.log('Conexión exitosa. Bienvenido, ' + userData.login);
                return true;
            } else {
                console.error('Error de conexión:', response.statusText);
                return false;
            }
        } catch (error) {
            console.error('Error de conexión:', error.message);
            return false;
        }
    }

//Create get Repositories info by organization

    async getRepositories(orgName , baseUrl){
        try{
            const response= await fetch (baseUrl, {
                header: {
                    Authorization: 'token ${this.authToken}',
                },
            });
            return await response.json();
        }catch(error){
            console.error('Error fetching repositories:', error.message)
            return null;
        }
    }


    saveJsonToFile(data, filename) {
        const jsonData = JSON.stringify(data, null, 2); // Formatear con sangría de 2 espacios
        fs.writeFileSync(filename, jsonData);
        console.log(`JSON data saved to ${filename}`);
    }



}

githubClient = new GitHubClient();
githubClient.testConnection()

const orgName = 'stackbuilders';
const baseUrl = `https://api.github.com/orgs/${orgName}/repos`;

githubClient.getRepositories(orgName,baseUrl)
    .then (repositories => {
        if (repositories){
            console.log('Repositories:');
            githubClient.saveJsonToFile(repositories,'repositories.json');
        }
    })
    .catch(error => console.error('Error:', error));


