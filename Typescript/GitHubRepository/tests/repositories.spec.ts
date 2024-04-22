import { validateRepositories } from '../repository';

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
