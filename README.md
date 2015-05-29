# d3-pedigree-examples

Examples of how to create traditionally styled family pedigrees with [D3](http://d3js.org/). 

When I started learning how to draw pedigrees with D3, I had difficulty mixing and 
matching techniques from different examples and separating the basics from the fancy 
stylistic additions. Hopefully by showing the basics and how to incrementally add
advanced features, you won't have to become an expert in D3 just to draw a pedigree.

My requirements were:

* A tree with __square boxes and straight connecting lines__. Most D3 tree examples
  used circles for nodes and curved connecting lines.
* There needed to be a __fixed distance between generations__. By default, D3 trees
  fill up all the available space given to them.
* The tree needed to be __expandable and collapsible__.
* Need a way to display both __ancestors and descendants__.
* __Pan and zoom__.

### Examples

* __[Basic](http://justincy.github.io/d3-pedigree-examples/basic.html)__: A basic static pedigree.
* __[Expand and Collapse](http://justincy.github.io/d3-pedigree-examples/expandable.html)__: Click on persons to expand and collapse the tree.
* __[Smooth Transitions](http://justincy.github.io/d3-pedigree-examples/transitions.html)__: Changes are animated when the tree is expanded or collapsed.

Pan and zoom via the mouse are enabled in all examples.