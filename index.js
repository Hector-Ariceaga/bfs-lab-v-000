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
    edge.filter(edgeVertix => {
      edgeVertix != vertex
    })
  })
  adjacentVertices = vertices.filter(vertex => {
      if (vertex == edgesWithVertex[0] || vertex == edgesWithVertex [1]) {
        return vertex
      }
    })
    console.log(edgesWithVertex)
  return adjacentVertices
}


let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
