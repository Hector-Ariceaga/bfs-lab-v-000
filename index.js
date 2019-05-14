function bfs(startNode, vertices, edges){

}

let findAdjacent = (vertex, vertices, edges) => {
  console.log(edges.filter(edge => {
    edge.includes(vertex)
  }).map(edge.filter(node => {
    node != vertex
  }))
)
  edgesWithVertex.map(edge => {
    edge.find(edgeVertix => {
      return edgeVertix != vertex
    })
  })
  // adjacentVertices = vertices.filter(vertex => {
  //     if (vertex == edgesWithVertex[0] || vertex == edgesWithVertex [1]) {
  //       return vertex
  //     }
  //   })
    console.log(edgesWithVertex)
  return adjacentVertices
}


let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {

}
