"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Extract from json file the new repositories with the info requiered
var fs_1 = require("fs");
const { clearScreenDown } = require("readline");
function extractFields(inputFilePath, outputFilePath) {
    var data = fs_1.default.readFileSync(inputFilePath, 'utf-8');
    var repositories = JSON.parse(data);
    var extractRepositoryFields = function (repo) { return ({
        id: repo.id,
        name: repo.name,
        updated_at: repo.updated_at,
        stargazers_count: repo.stargazers_count
    }); };
    var filteredRepositories = repositories.map(extractRepositoryFields);
    fs_1.default.writeFileSync(outputFilePath, JSON.stringify(filteredRepositories, null, 2));
    console.log("Filtered Data saved to ".concat(outputFilePath));
}
// Uso de la clase JsonFileManager
var inputFilePath = 'repositories.json';
var outputFilePath = 'resume_repositories.json';
extractFields(inputFilePath, outputFilePath);

