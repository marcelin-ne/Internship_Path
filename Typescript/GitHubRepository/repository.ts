import fs from 'fs';

interface Repository {
    id: number;
    name:string;
    updated_at: string;
    stargazers_count: number;
}

export function validateRepositories(repositories: any[]): boolean {
    if (repositories.length === 0) {
        return false;
    }

    let isValid = true;
    repositories.forEach((repo: any) => {
        const keys = ['id', 'name', 'updated_at', 'stargazers_count'];
        keys.forEach(key => {
            if (!repo.hasOwnProperty(key)) {
                isValid = false;
                throw new Error(`The repository does not have the required property: ${key}`);
            }
        });
    });
    return isValid;
}

