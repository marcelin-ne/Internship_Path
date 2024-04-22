"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterRepositoriesWithMoreThanFiveStars = exports.validateRepositories = void 0;
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
