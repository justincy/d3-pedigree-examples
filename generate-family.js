/**
 * Generates random family data and outputs to stdout as formatted JSON.
 */

var chance = require('chance').Chance(),
    argv = require('minimist')(process.argv.slice(2)),
    generations = argv.n;

if(typeof generations === 'undefined'){
  console.log('-n required to specify number of generations');
  process.exit();
}

generations = parseInt(generations) - 1;

console.log(JSON.stringify(generatePerson(generations), null, 2));

function generatePerson(generations){
  var person = {
    name: chance.name()
  };
  if(generations > 0){
    person.parents = [];
    person.parents.push(generatePerson(generations - 1));
    person.parents.push(generatePerson(generations - 1));
  }
  return person;
};