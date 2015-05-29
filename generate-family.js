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

// Int format and descrement by one to account for first person
generations = parseInt(generations, 10) - 1;

var person = generatePerson();
person._parents = [
  generateParents(generations - 1),
  generateParents(generations - 1)
];
person._children = [
  generateChildren(generations - 1),
  generateChildren(generations - 1),
  generateChildren(generations - 1)
];

// Print to stdout in formatted JSON
console.log(JSON.stringify(person, null, 2));

function generatePerson(){
  return {
    name: chance.name(),
    id: chance.guid()
  };
}

function generateParents(generations){
  var person = generatePerson();
  if(generations > 0){
    person._parents = [
      generateParents(generations - 1),
      generateParents(generations - 1)
    ];
  }
  return person;
}

function generateChildren(generations){
  var person = generatePerson();
  if(generations > 0){
    person._children = [
      generateChildren(generations - 1),
      generateChildren(generations - 1),
      generateChildren(generations - 1)
    ];
  }
  return person;
}