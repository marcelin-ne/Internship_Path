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
}


const githubClient = new GitHubClient();
githubClient.testConnection();