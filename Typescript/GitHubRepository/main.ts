import * as fs from 'fs';
import { filterRepositoriesWithMoreThanFiveStars, getLastFiveUpdatedRepositories, validateRepositories } from './repository';
// const fs = require('fs');
// import fs from 'fs'; This not work ask why

const repositories_psth='resume_repositories.json'
const rawData = fs.readFileSync(repositories_psth, 'utf-8')
const repositories = JSON.parse(rawData);


// console.log("repositories:" , repositories);

// 1.l Validate each reapository repositories in repositories
//!Ask
// Object.values(repositories).map((repo: any) => {
//     validateRepositories(repo); 
// });

//1. Repositories with more than 5 stars
console.log("Repositories with more than 5 stars") ;
const filter_Repositories = filterRepositoriesWithMoreThanFiveStars(repositories);
console.log(filter_Repositories);

console.log (" Last Five Update Repositories") ;
const last_Update = getLastFiveUpdatedRepositories(repositories);
console.log(last_Update);

