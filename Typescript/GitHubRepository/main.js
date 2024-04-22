"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var repository_1 = require("./repository");
// const fs = require('fs');
// import fs from 'fs'; This not work ask why
var repositories_psth = 'resume_repositories.json';
var rawData = fs.readFileSync(repositories_psth, 'utf-8');
var repositories = JSON.parse(rawData);
// console.log("repositories:" , repositories);
// 1.l Validate each reapository repositories in repositories
//!Ask
// Object.values(repositories).map((repo: any) => {
//     validateRepositories(repo); 
// });
//1. Repositories with more than 5 stars
console.log("Repositories with more than 5 stars");
var filter_Repositories = (0, repository_1.filterRepositoriesWithMoreThanFiveStars)(repositories);
console.log(filter_Repositories);
console.log(" Last Five Update Repositories");
var last_Update = (0, repository_1.getLastFiveUpdatedRepositories)(repositories);
console.log(last_Update);
var sum_Stars = (0, repository_1.sumOfAllRepositoryStars)(repositories);
console.log("Sum of all Repositories stars: ", sum_Stars);
var top_Five = (0, repository_1.getTopFiveRepositoriesByStars)(repositories);
console.log("Top 5 Repositories by Stars", top_Five);
var sorted_repositories = (0, repository_1.listRepositoriesAlphabeticallyWithoutH)(repositories);
console.log("Repositories with out a H ", sorted_repositories);
