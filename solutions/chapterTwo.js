var module = module || undefined;
if (module) {
  module.exports = {};
  module.exports.removeDuplicates = removeDuplicates;
  module.exports.findK2Last = findK2Last;
}

// No buffer allowed!
// Linked Lists can often be approached using a walker and a runner which reference one another to complete tasks.
function removeDuplicates(head) {
  var walker = head;
  var runner = head;
  while (walker.next !== null) {
    while (runner.next !== null) {
      if (runner.next.val === walker.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    if (walker.next === null) { return head; }
    walker = walker.next;
    runner = walker;
  }
  return head;
}

// Tabulated values in diagramming phaes should match the order of operations in while loop.
// Explicitly define base case, before while loop conditions in tabulated values.
// Remember that kth to last means the last value isn't included in your count to k.
// Also, no need to change the stored k-value until AFTER your greater than k+1.

function findK2Last(head, k) {
  var current = head, total = 1, kth = head;
  while (current.next !== null) {
    current = current.next;
    total++;
    if (total > k + 1) {
      kth = kth.next;
    }
  }
  return total >= k + 1 ? kth : undefined;
}
