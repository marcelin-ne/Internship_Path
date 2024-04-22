import { validateRepositories , filterRepositoriesWithMoreThanFiveStars , getLastFiveUpdatedRepositories , sumOfAllRepositoryStars } from '../repository';

describe('Validate Repositories', () => {
    const validRepositories = [
        {
            "id": 1176286,
            "name": "pivotal_planning_poker",
            "updated_at": "2017-05-21T04:36:44Z",
            "stargazers_count": 6
        },
        {
            "id": 1176287,
            "name": "another_repository",
            "updated_at": "2017-05-21T04:36:44Z",
            "stargazers_count": 10
        }
    ];

    const invalidRepositories = [
        {
            "id": 1176286,
            "name": "pivotal_planning_poker",
            "updated_at": "2017-05-21T04:36:44Z",
            // Falta la propiedad 'stargazers_count'
        },
        {
            "id": 1176287,
            "name": "another_repository",
            "stargazers_count": 10,
            // Falta la propiedad 'updated_at'
        },
        // Falta la propiedad 'name'
        {
            "id": 1176288,
            "updated_at": "2017-05-21T04:36:44Z",
            "stargazers_count": 10
        }
    ];

    it('should return true when all repositories are valid', () => {
        expect(validateRepositories(validRepositories)).toBe(true);
    });

    it('should throw an error when a repository is missing a required property', () => {
        expect(() => validateRepositories(invalidRepositories)).toThrow();
    });
    it('should return false when no repositories are provided', () => {
        expect(validateRepositories([])).toBe(false);
    });
});


// Pruebas unitarias

describe('filterRepositoriesWithMoreThanFiveStars', () => {
    it('Debería devolver una lista vacía si no hay repositorios con más de 5 estrellas', () => {
        const repositories = [
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 5
            },
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 3
            },
            {
                id: 3,
                name: 'Repo 3',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 4
            }
        ];
        expect(filterRepositoriesWithMoreThanFiveStars(repositories)).toEqual([]);
    });

    it('Debería devolver una lista con los repositorios que tienen más de 5 estrellas', () => {
        const repositories = [
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 6
            },
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 10
            },
            {
                id: 3,
                name: 'Repo 3',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 4
            }
        ];
        expect(filterRepositoriesWithMoreThanFiveStars(repositories)).toEqual([
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 6
            },
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 10
            }
        ]);
    });

    it('Debería devolver una lista vacía si no se proporciona ningún repositorio', () => {
        expect(filterRepositoriesWithMoreThanFiveStars([])).toEqual([]);
    });
});


describe('getLastFiveUpdatedRepositories', () => {
    test('should return the last 5 updated repositories', () => {
        const repositories = [
            { id: 1, name: 'repo1', updated_at: '2023-04-01T12:00:00Z' },
            { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' },
            { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' },
            { id: 4, name: 'repo4', updated_at: '2023-04-04T12:00:00Z' },
            { id: 5, name: 'repo5', updated_at: '2023-04-05T12:00:00Z' },
            { id: 6, name: 'repo6', updated_at: '2023-04-06T12:00:00Z' }
        ];
        const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(repositories);

    expect(lastFiveUpdatedRepositories).toEqual([
        { id: 6, name: 'repo6', updated_at: '2023-04-06T12:00:00Z' },
        { id: 5, name: 'repo5', updated_at: '2023-04-05T12:00:00Z' },
        { id: 4, name: 'repo4', updated_at: '2023-04-04T12:00:00Z' },
        { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' },
        { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' }
        ]);
    });

    test('should return all repositories if there are less than 5', () => {
            const repositories = [
            { id: 1, name: 'repo1', updated_at: '2023-04-01T12:00:00Z' },
            { id: 2, name: 'repo2', updated_at: '2023-04-02T12:00:00Z' },
            { id: 3, name: 'repo3', updated_at: '2023-04-03T12:00:00Z' }
            ];

        const lastFiveUpdatedRepositories = getLastFiveUpdatedRepositories(repositories);

        expect(lastFiveUpdatedRepositories).toEqual(repositories);
        });
});


describe('sumOfAllRepositoryStars', () => {
    test('should return the sum of all repository stars', () => {
        const repositories = [
        { id: 1, name: 'repo1', stargazers_count: 10 },
        { id: 2, name: 'repo2', stargazers_count: 20 },
        { id: 3, name: 'repo3', stargazers_count: 30 }
        ];


    const totalStars = sumOfAllRepositoryStars(repositories);


    expect(totalStars).toBe(10 + 20 + 30);
    });

    test('should return 0 if there are no repositories', () => {

    const repositories = [];


    const totalStars = sumOfAllRepositoryStars(repositories);

    expect(totalStars).toBe(0);
    });
});