const fs = require('fs');

const token = process.env.GITHUB_TOKEN;
const baseUrl= 'https://api.github.com';
const org_Name = 'stackbuilders';
const baseUrlOrg = `https://api.github.com/orgs/${org_Name}/repos`;

    async function testConnection(token) {
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

//Create get Repositories info by organization

    async  function getRepositories(org_Name , baseUrlOrg){
        try{
            const response= await fetch (baseUrlOrg, {
                header: {
                    Authorization: 'token ${authToken}',
                },
            });
            return await response.json();
        }catch(error){
            console.error('Error fetching repositories:', error.message)
            return null;
        }
    }


    function saveJsonToFile(data, filename) {
        const jsonData = JSON.stringify(data, null, 2); // Formatear con sangría de 2 espacios
        fs.writeFileSync(filename, jsonData);
        console.log(`JSON data saved to ${filename}`);
    }



    testConnection(baseUrl, token)
    .then(connectionSuccessful => {
        if (connectionSuccessful) {
            console.log('La conexión fue exitosa.');
        } else {
            console.log('La conexión falló.');
        }
    });

