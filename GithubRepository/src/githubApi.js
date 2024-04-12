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


    async getTopRepositories(orgName, count = 5) {
        if (!this.token) {
            console.error('No se ha proporcionado un token de acceso. Configure la variable de entorno GITHUB_TOKEN.');
            return [];
        }

        try {
            const response = await fetch(`${this.baseUrl}/orgs/${orgName}/repos?per_page=${count}&sort=stars&direction=desc`, {
                //No traer la data con sorting , solo la data de los repositorios para poner en los mocks 
                // Y probar el metodo de getTopRepositories
                headers: {
                    Authorization: `token ${this.token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error('Error al obtener los mejores repositorios:', response.statusText);
                return [];
            }
        } catch (error) {
            console.error('Error al obtener los mejores repositorios:', error.message);
            return [];
        }
    }

}






const githubClient = new GitHubClient();
githubClient.testConnection();
const topRepos = githubClient.getTopRepositories('stackbuilders')
.then(topRepos => {
    console.log(topRepos);
})
.catch(error => {
    console.error('Error al obtener los mejores repositorios:', error);
});

console.log(topRepos);