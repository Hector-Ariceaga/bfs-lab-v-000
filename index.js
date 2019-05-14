function bfs(startNode, vertices, edges){
  startNode.distance = 0;
  queue = [startNode];
  queueOrder = [startNode];

  while (queue.length != 0) {
    let firstNode = queue.shift()
    let adjacentVertices = findAdjacent(startNode)

    for vertex in adjacentVertices {
      markDistanceAndPredecessor(vertex)
      queue.push(vertex)
    }
  }
  return queueOrder
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
