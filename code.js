function augmentingPath(graph, start, end) {
    function dfs(node, visited, path) {
        visited[node] = true;
        if (node === end) {
            path.push(node);
            return path;
        }
        for (let neighbor of graph[node]) {
            if (!visited[neighbor.name] && neighbor.capacity > 0) {
                let result = dfs(neighbor.name, visited, path.concat([node]));
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
