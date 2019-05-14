function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  edges.filter(edge => {
    edge.includes(vertex)
  }).map(edge => {
    edge.filter(node => {
      return node != vertex
    })
  }).map(vertexName => {
    vertices.find(vertex => {
      vertex.name == vertexName
    })
  })
}

let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
