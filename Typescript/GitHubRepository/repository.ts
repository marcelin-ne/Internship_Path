

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

export function filterRepositoriesWithMoreThanFiveStars(repositories: any[]): any[] {
    return repositories.filter((repo) => repo.stargazers_count > 5);
}


export function getLastFiveUpdatedRepositories(repositories: any[]): any[] {
    const sortedRepositories = repositories.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    return sortedRepositories.slice(0, 5);
}

export function sumOfAllRepositoryStars(repositories: any[]): number {
    const totalStars: number = repositories.reduce((accumulator: number, repo: any) => accumulator + repo.stargazers_count, 0);

    return totalStars;
}

export function getTopFiveRepositoriesByStars(repositories: any[]): any[] {
    const sortedRepositories = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return sortedRepositories.slice(0, 5);
}

export function listRepositoriesAlphabeticallyWithoutH(repositories: any[]): any[] {
    const filteredRepositories = repositories.filter(repo => !repo.name.toLowerCase().startsWith('h'));
    const sortedRepositories = filteredRepositories.sort((a, b) => a.name.localeCompare(b.name));
    return sortedRepositories;
}
