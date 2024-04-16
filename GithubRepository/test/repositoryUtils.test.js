const { filterRepositoriesWithMoreThanFiveStars } = require('../src/repositoryUtils.js');


describe('filterRepositoriesWithMoreThanFiveStars', () => {
    test('should return repositories with more than 5 stars', () => {
    // Test Repositories
        const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 2, name: 'repo2', stargazers_count: 5 },
        { id: 3, name: 'repo3', stargazers_count: 8 }
        ];


    const filteredRepositories = filterRepositoriesWithMoreThanFiveStars(repositories);

    // Verification
    expect(filteredRepositories).toEqual([
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 3, name: 'repo3', stargazers_count: 8 }
    ]);
    });

    test('should return an empty array if no repositories have more than 5 stars', () => {
    // Test respositories with no  more that 5 stars
    const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 3 },
        { id: 2, name: 'repo2', stargazers_count: 5 },
        { id: 3, name: 'repo3', stargazers_count: 2 }
    ];

    // Call the function
    const filteredRepositories = filterRepositoriesWithMoreThanFiveStars(repositories);

    // Verification
    expect(filteredRepositories).toEqual([]);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////

const { getLastFiveUpdatedRepositories } = require('../src/repositoryUtils');
describe('getLastFiveUpdatedRepositories', () => {
    test('should return the last 5 updated repositories', () => {
        // test Repositories
        const repositories = [
            { id: 1, name: 'repo1', updated_at: '2023-04-01T12:00:00Z' },
            { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' },
            { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' },
            { id: 4, name: 'repo4', updated_at: '2023-04-04T12:00:00Z' },
            { id: 5, name: 'repo5', updated_at: '2023-04-05T12:00:00Z' },
            { id: 6, name: 'repo6', updated_at: '2023-04-06T12:00:00Z' }
        ];
        const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(repositories);
      // Verification
    expect(lastFiveUpdatedRepositories).toEqual([
        { id: 6, name: 'repo6', updated_at: '2023-04-06T12:00:00Z' },
        { id: 5, name: 'repo5', updated_at: '2023-04-05T12:00:00Z' },
        { id: 4, name: 'repo4', updated_at: '2023-04-04T12:00:00Z' },
        { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' },
        { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' }
        ]);
    });

    test('should return all repositories if there are less than 5', () => {
        // Repositorios de prueba con menos de 5 repositorios
            const repositories = [
            { id: 1, name: 'repo1', updated_at: '2023-04-01T12:00:00Z' },
            { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' },
            { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' }
            ];

        // Llamar a la función con los repositorios de prueba
        const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(repositories);

        // Verificar que la función devuelva todos los repositorios
        expect(lastFiveUpdatedRepositories).toEqual(repositories);
        });
});

const { sumOfAllRepositoryStars } = require('../src/repositoryUtils');

describe('sumOfAllRepositoryStars', () => {
    test('should return the sum of all repository stars', () => {
    // Repositorios de prueba
        const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 2, name: 'repo2', stargazers_count: 20 },
        { id: 3, name: 'repo3', stargazers_count: 30 }
        ];

    // Llamar a la función que estamos probando
    const totalStars = sumOfAllRepositoryStars(repositories);

    // Verificar si la suma de estrellas es correcta
    expect(totalStars).toBe(10 + 20 + 30);
    });

    test('should return 0 if there are no repositories', () => {
    // Repositorios de prueba vacío
    const repositories = [];

    // Llamar a la función con los repositorios de prueba
    const totalStars = sumOfAllRepositoryStars(repositories);

    // Verificar que la suma de estrellas sea 0
    expect(totalStars).toBe(0);
    });
});