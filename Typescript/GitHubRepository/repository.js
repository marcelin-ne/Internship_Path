"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRepositoriesAlphabeticallyWithoutH = exports.getTopFiveRepositoriesByStars = exports.sumOfAllRepositoryStars = exports.getLastFiveUpdatedRepositories = exports.filterRepositoriesWithMoreThanFiveStars = exports.validateRepositories = void 0;
function validateRepositories(repositories) {
    if (repositories.length === 0) {
        return false;
    }
    var isValid = true;
    repositories.forEach(function (repo) {
        var keys = ['id', 'name', 'updated_at', 'stargazers_count'];
        keys.forEach(function (key) {
            if (!repo.hasOwnProperty(key)) {
                isValid = false;
                throw new Error("The repository does not have the required property: ".concat(key));
            }
        });
    });
    return isValid;
}
exports.validateRepositories = validateRepositories;
function filterRepositoriesWithMoreThanFiveStars(repositories) {
    return repositories.filter(function (repo) { return repo.stargazers_count > 5; });
}
exports.filterRepositoriesWithMoreThanFiveStars = filterRepositoriesWithMoreThanFiveStars;
function getLastFiveUpdatedRepositories(repositories) {
    var sortedRepositories = repositories.sort(function (a, b) { return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(); });
    return sortedRepositories.slice(0, 5);
}
exports.getLastFiveUpdatedRepositories = getLastFiveUpdatedRepositories;
function sumOfAllRepositoryStars(repositories) {
    var totalStars = repositories.reduce(function (accumulator, repo) { return accumulator + repo.stargazers_count; }, 0);
    return totalStars;
}
exports.sumOfAllRepositoryStars = sumOfAllRepositoryStars;
function getTopFiveRepositoriesByStars(repositories) {
    var sortedRepositories = repositories.sort(function (a, b) { return b.stargazers_count - a.stargazers_count; });
    return sortedRepositories.slice(0, 5);
}
exports.getTopFiveRepositoriesByStars = getTopFiveRepositoriesByStars;
function listRepositoriesAlphabeticallyWithoutH(repositories) {
    var filteredRepositories = repositories.filter(function (repo) { return !repo.name.toLowerCase().startsWith('h'); });
    var sortedRepositories = filteredRepositories.sort(function (a, b) { return a.name.localeCompare(b.name); });
    return sortedRepositories;
}
exports.listRepositoriesAlphabeticallyWithoutH = listRepositoriesAlphabeticallyWithoutH;
