function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  return edges.filter(edge => {
    return edge.includes(vertex)
  }).map(edge => {
    return edge.filter(node => {
      return node != vertex
    })
  }).map(vertexName => {
    return vertices.find(vertex => {
      return vertex.name == vertexName
    })
  }).filter(node => {
      return node.distance == null
    })
  })
}

let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
