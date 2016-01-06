/**
 * Code to find the identical node from an identical DOM tree
 * 1. Find the path of the node from the current DOM
 * 2. The get the node from the identical DOM based on the path
 */

function indexOf(arrLike, target) {
    return Array.prototype.indexOf.call(arrLike, target);
}

// Given a node and a tree, extract the nodes path 
function getPath(root, target) {
    var current = target;
    var path = [];
    while(current !== root) {
        path.unshift(indexOf(current.parentNode.childNodes, current));
        current = current.parentNode;
    }
    return path;
}

// Given a tree and a path, let's locate a node
function locateNodeFromPath(root, path) {
    var current = root;
    for(var i = 0, len = path.length; i < len; i++) {
        current = current.childNodes[path[i]];
    }
    return current;
}

function getIdenticalNode(rootA, rootB, target) {
    return locateNodeFromPath(rootB, getPath(rootA, target));
}
