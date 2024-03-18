function getValue(obj, path) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null;
    }, obj);
}

function removeDuplicates(array, keyPath) {
    let seen = {};
    return array.filter(function(item) {
        let key = getValue(item, keyPath);
        return seen.hasOwnProperty(key) ? false : (seen[key] = true);
    });
}

export {
    removeDuplicates
}