const token: string | undefined = process.env.GITHUB_TOKEN;
const baseUrl: string = 'https://api.github.com';
const orgName: string = 'stackbuilders';
const baseUrlOrg: string = `https://api.github.com/orgs/${orgName}/repos`;

async function testConnection(token: string | undefined): Promise<boolean> {
    if (!token) {
        console.error('No se ha proporcionado un token de acceso. Configure la variable de entorno GITHUB_TOKEN.');
        return false;
    }

    try {
        const response = await fetch(`${baseUrl}/user`, {
            headers: {
                Authorization: `token ${token}`
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

// Test the conection

testConnection(token);