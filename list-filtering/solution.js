function filter_list(l) {
  const filtered = l.filter(nums => parseInt(nums) === nums);
  return filtered;
}