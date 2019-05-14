function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  let adjacentVertices = [];
  let edgesWithVertex = [];
  edges.forEach(edge => {
    if (edge.includes(vertex)) {
      edgesWithVertex.push(edge)
    }
  })
  edgesWithVertex.forEach(edge => {
    edge.forEach(edgeVertix => {
      edgeVertix != vertex ? adjacentVertices.push(edgeVertix) : ''})
  })
  adjacentVertices = vertices.map(vertex => {
    vertex.name == adjacentVertices[0] || vertex.name == adjacentVertices[1]
  })
  return adjacentVertices
}


let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
