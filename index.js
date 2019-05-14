function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  console.log(edges.filter(edge => {
    edge.includes(vertex)
  }).map(edges.filter(node => {
    node != vertex
  }))
)
}


let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
