import { validateRepositories , filterRepositoriesWithMoreThanFiveStars , 
    getLastFiveUpdatedRepositories ,
     sumOfAllRepositoryStars,
    getTopFiveRepositoriesByStars, listRepositoriesAlphabeticallyWithoutH,
    } from '../repository';

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


describe('getTopFiveRepositoriesByStars', () => {
    it('Debería devolver una lista vacía si no se proporciona ningún repositorio', () => {
        expect(getTopFiveRepositoriesByStars([])).toEqual([]);
    });

    it('Debería devolver una lista con los top 5 repositorios que tienen más estrellas', () => {
        const repositories = [
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 10
            },
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 20
            },
            {
                id: 3,
                name: 'Repo 3',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 15
            },
            {
                id: 4,
                name: 'Repo 4',
                updated_at: '2018-01-10T08:30:00Z',
                stargazers_count: 5
            },
            {
                id: 5,
                name: 'Repo 5',
                updated_at: '2022-11-30T14:45:00Z',
                stargazers_count: 25
            },
            {
                id: 6,
                name: 'Repo 6',
                updated_at: '2020-06-05T09:20:00Z',
                stargazers_count: 30
            }
        ];
        expect(getTopFiveRepositoriesByStars(repositories)).toEqual([
            {
                id: 6,
                name: 'Repo 6',
                updated_at: '2020-06-05T09:20:00Z',
                stargazers_count: 30
            },
            {
                id: 5,
                name: 'Repo 5',
                updated_at: '2022-11-30T14:45:00Z',
                stargazers_count: 25
            },
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 20
            },
            {
                id: 3,
                name: 'Repo 3',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 15
            },
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 10
            }
        ]);
    });

    it('Debería devolver una lista con los top 5 repositorios cuando hay menos de 5 repositorios', () => {
        const repositories = [
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 10
            },
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 20
            },
            {
                id: 3,
                name: 'Repo 3',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 15
            }
        ];
        expect(getTopFiveRepositoriesByStars(repositories)).toEqual([
            {
                id: 2,
                name: 'Repo 2',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 20
            },
            {
                id: 3,
                name: 'Repo 3',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 15
            },
            {
                id: 1,
                name: 'Repo 1',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 10
            }
        ]);
    });
});


describe('listRepositoriesAlphabeticallyWithoutH', () => {
    it('Debería devolver una lista vacía si no se proporciona ningún repositorio', () => {
        expect(listRepositoriesAlphabeticallyWithoutH([])).toEqual([]);
    });

    it('Debería devolver una lista de repositorios en orden alfabético sin repositorios que comienzan con "h"', () => {
        const repositories = [
            {
                id: 1,
                name: 'pivotal_planning_poker',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 6
            },
            {
                id: 2,
                name: 'hackchange_demo',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 0
            },
            {
                id: 3,
                name: 'learn-javascript',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 4
            },
            {
                id: 4,
                name: 'happy_repo',
                updated_at: '2018-01-10T08:30:00Z',
                stargazers_count: 5
            },
            {
                id: 5,
                name: 'hello_world',
                updated_at: '2022-11-30T14:45:00Z',
                stargazers_count: 25
            },
            {
                id: 6,
                name: 'javascript_library',
                updated_at: '2020-06-05T09:20:00Z',
                stargazers_count: 30
            }
        ];
        expect(listRepositoriesAlphabeticallyWithoutH(repositories)).toEqual([
            {
                id: 6,
                name: 'javascript_library',
                updated_at: '2020-06-05T09:20:00Z',
                stargazers_count: 30
            },
            {
                id: 3,
                name: 'learn-javascript',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 4
            },
            {
                id: 1,
                name: 'pivotal_planning_poker',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 6
            }
        ]);
    });

    it('Debería devolver una lista de repositorios en orden alfabético sin repositorios que comienzan con "h" cuando todos los repositorios comienzan con "h"', () => {
        const repositories = [
            {
                id: 1,
                name: 'happy_repo',
                updated_at: '2017-05-21T04:36:44Z',
                stargazers_count: 6
            },
            {
                id: 2,
                name: 'hello_world',
                updated_at: '2014-12-15T12:18:33Z',
                stargazers_count: 0
            },
            {
                id: 3,
                name: 'happy_repo_2',
                updated_at: '2023-04-22T10:00:00Z',
                stargazers_count: 4
            },
            {
                id: 4,
                name: 'happy_repo_3',
                updated_at: '2018-01-10T08:30:00Z',
                stargazers_count: 5
            },
            {
                id: 5,
                name: 'happy_repo_4',
                updated_at: '2022-11-30T14:45:00Z',
                stargazers_count: 25
            },
            {
                id: 6,
                name: 'happy_repo_5',
                updated_at: '2020-06-05T09:20:00Z',
                stargazers_count: 30
            }
        ];
        expect(listRepositoriesAlphabeticallyWithoutH(repositories)).toEqual([]);
    });
});
