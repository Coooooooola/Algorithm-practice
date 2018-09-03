var combinationSum = function(candidates, target) {
  const res = []
  recursive(candidates, 0, target, [], res)
  return res
};

function recursive(candidates, index, target, store, res) {
  if (target === 0) {
    res.push(store.slice())
  }
  if (target <= 0 || index === candidates.length) {
    return
  }
  recursive(candidates, index + 1, target, store, res)
  const end = store.length
  while (target > 0) {
    target -= candidates[index]
    store.push(candidates[index])
    recursive(candidates, index + 1, target, store, res)
  }
  store.splice(end)
}
