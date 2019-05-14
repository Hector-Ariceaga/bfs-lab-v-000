function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  return edges.filter(edge => {
    edge.includes(vertex)
  }).map(edge => {
    edge.filter(node => {
      return node != vertex
    })
  }).map(vertexName => {
    vertices.find(vertex => {
      vertex.name == vertexName
    })
  }).filter(node => {
    return node.distance == null
  })
}

let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
