function augmentingPath(graph, start, end) {
    function dfs(node, visited, path) {
        visited[node] = true;
        if (node === end) {
            return path.concat(node);
        }
        for (let neighbor of graph[node]) {
            if (!visited[neighbor] && neighbor.capacity > 0) {
                let result = dfs(neighbor, visited, path.concat(node));
                if (result.length > 0) {
                    return result;
                }
            }
        }
        return [];
    }

    let visited = {};
    let path = dfs(start, visited, []);
    return path;
}
