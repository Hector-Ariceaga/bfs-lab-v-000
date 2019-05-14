function bfs(startNode, vertices, edges){

}

let findVertex = (vertexName, vertices) => {
  return vertices.find(vertex => {
    return vertex.name == vertexName;
  });
}

let findAdjacent = (vertex, vertices, edges) => {
  return edges.filter(edge => {
    return edge.includes(vertex);
  }).map(edge => {
    return edge.filter(node => {
      return node != vertex;
    });
  }).map(vertexName => {
    return findVertex(vertexName, vertices);
  }).filter(node => {
    return node.distance == null;
  });
}

let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {
  adjacentVertices.map(adjacentVertex => {
    adjacentVertex.distance = vertex.distance + 1;
    adjacentVertex.predecessor = vertex;
  });
}
