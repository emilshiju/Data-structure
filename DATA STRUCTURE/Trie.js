class TrieNode {

    constructor() {
        this.childer = {}
        this.isEnd = false;
    }
}

class TrieOpretions {


    constructor() {
        this.root = new TrieNode();
    }

    insert(value) {
        var root = this.root;
        for (let i = 0; i < value.length; i++) {
            var char = value.charAt(i);
            if (!root.childer[char]) {
                root.childer[char] = new TrieNode();
            }

            root = root.childer[char]
        }
        root.isEnd = true;
    }

    prefixSearch(prefix) {
        var root = this.root;

        for (let i = 0; i < prefix.length; i++) {
            var char = prefix.charAt(i);
            if (!root.childer[char]) {
                return false;
            }
            root = root.childer[char]
        }

        return true;
    }

    wordSearch(prefix) {
        var root = this.root;

        for (let i = 0; i < prefix.length; i++) {
            var char = prefix.charAt(i);
            if (!root.childer[char]) {
                return false;
            }
            root = root.childer[char]
        }

        return root.isEnd;
    }
}


var trie= new TrieOpretions();
trie.insert("sample")
console.log(trie.wordSearch("sample"));
console.log(trie.prefixSearch("sam"));