// This class manage json files to extract data

const fs = require('fs')

function extractFields(inputFilePath, outputFilePath){
    //1. Read de json file 
    const data = fs.readFileSync(inputFilePath,'utf-8');
    const repositories = JSON.parse(data);
    //2. Arroy function to create a new object with the values from repositories
    const extractRepositoryFields = repo => ({
        id:repo.id,
        name: repo.name,
        updated_at:repo.updated_at,
        stargazers_count:repo.stargazers_count
    });
    //3. Apply the function to every repository
    const filteredRepositories = repositories.map(extractRepositoryFields);
    //4. Write new json file
    fs.writeFileSync(outputFilePath,JSON.stringify(filteredRepositories,null,2));
    console.log('Filtered Data save to ${outputFilePath} ')
}

inputFilePath='repositories.json'
outputFilePath='resume_repositories.json'

extractFields(inputFilePath,outputFilePath)