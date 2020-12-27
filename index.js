class TrieNode {
    constructor(data) {
        this.data = data;
        this.isEndOfWord = false;
        this.children = [];
    }
}

class Trie {
    constructor() {
        this.rootNode = new TrieNode('*');
    }

    add(value) {
        var currentNode = this.rootNode;

        value.split('')
            .forEach(
                (character, index) => {
                    var isLastChar = (index === value.length - 1);

                    if (!currentNode.children[character]) {
                        currentNode = currentNode.children[character] = new TrieNode(character);
                        currentNode.isEndOfWord = isLastChar;
                    }
                    else {
                        if (isLastChar)
                            currentNode.children[character].isEndOfWord = true;
                        else
                            currentNode = currentNode.children[character];
                    }

                }
            );
    }

    contains(value) {
        var currentNode = this.rootNode;

        for (var i = 0; i < value.length; i++) {
            var character = value[i];
            if (!currentNode.children[character])
                return false;

            currentNode = currentNode.children[character];
            if (i == value.length - 1)
                return currentNode.isEndOfWord;
        }
    }
}


var trie = new Trie();
var inputData = 'the input for the trie hola';

inputData.split(' ').forEach(word => trie.add(word));

var search = 'sample input for search trie holaa hola hol';

search.split(' ')
    .forEach(
        word => {
            console.log(word + ' = ' + trie.contains(word));
        });
