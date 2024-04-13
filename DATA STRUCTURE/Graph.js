
// adjecency matrix reperesentation
const matrix= [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]
console.log(matrix[1][2]);

//  Adjecncy list representation

const list ={

    'A':['B'],
    'B':['A','C'],
    'C':['B']

}

console.log(list['B']);


class Graph {

    constructor(){

        this.List ={}
    }

    addVertex(vertex){

        if(!this.List[vertex]){
            this.List[vertex]= new Set()
        }
    }

    addEdge(vertex1,vertex2){

        if(!this.List[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.List[vertex2]){
            this.addVertex(vertex2)
        }
        this.List[vertex1].add(vertex2)
        this.List[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){

        this.List[vertex1].delete(vertex2)
        this.List[vertex2].delete(vertex1)
    }

removeVertex(vertex){
   
    if(!this.List[vertex]){
        return
    }
    for(let adjecentvertex of this.List[vertex]){
        this.removeEdge(vertex,adjecentvertex)
    }
    delete this.List[vertex]

}

    hasEdge(vertex1,vertex2){

        return (this.List[vertex1].has(vertex2) && this.List[vertex2].has(vertex1))
    }
    dispay(){

        for( let vertex in this.List){

            console.log(vertex +"->"+ [...this.List[vertex]]);
        }
    }

    Bfs(vertex){

        let queue=[]
        let result=[]
        let  visited= new Set()

        queue.push(vertex)
        visited.add(vertex)

        while(queue.length){

            let shifted=queue.shift()
            result.push(shifted)
            visited.add(shifted)

            let neighbour=this.List[shifted]

            for(let i of neighbour){

                if(!visited.has(i)){
                    queue.push(i)
                    visited.add(i)
                }
            }
            
        }
        return result
    }
    Dfs(vertex){

        let stack=[]
        let result=[]
        let visited=new Set()

        stack.push(vertex)
        visited.add(vertex)

        while(stack.length){

            let poped=stack.pop()
            result.push(poped)
            visited.add(poped)
            
            for(let i of this.List[poped]){

                if(!visited.has(i)){
                    stack.push(i)
                    visited.add(i)
                }
            }

        }
        return result
    }
}

let graph=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.addEdge("A","D")
console.log(graph.Bfs("A"));
console.log(graph.Dfs("A"));
graph.removeEdge("A","B")
graph.removeVertex("C")

graph.dispay()


console.log(graph.hasEdge("A","B"));