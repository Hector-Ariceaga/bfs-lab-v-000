function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  console.log(edges.filter(edge => {
    edge.includes(vertex)
  }).map(edge => {
    edge.filter(node => {
      node != vertex
    })
  }))
}

let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
