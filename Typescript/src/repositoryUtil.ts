
// Extract from json file the new repositories with the info requiered
import fs  from 'fs';

function extractFields(inputFilePath: string, outputFilePath: string): void {
    const data: string = fs.readFileSync(inputFilePath, 'utf-8');
    const repositories: any[] = JSON.parse(data);

    const extractRepositoryFields = (repo: any) => ({
        id: repo.id,
        name: repo.name,
        updated_at: repo.updated_at,
        stargazers_count: repo.stargazers_count
    });

    const filteredRepositories = repositories.map(extractRepositoryFields);

    fs.writeFileSync(outputFilePath, JSON.stringify(filteredRepositories, null, 2));
    console.log(`Filtered Data saved to ${outputFilePath}`);
}

// Uso de la clase JsonFileManager
const inputFilePath: string = 'repositories.json';
const outputFilePath: string = 'resume_repositories.json';

extractFields(inputFilePath, outputFilePath);
