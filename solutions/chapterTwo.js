var module = module || undefined;
if(module){
  module.exports = {};
  module.exports.removeDuplicates = removeDuplicates;
}

// No buffer allowed!
// Linked Lists can often be approached using a walker and a runner which reference one another to complete tasks.
function removeDuplicates(head){
  var walker = head;
  var runner = head;
  while(walker.next !== null){
    while(runner.next !== null){
      if(runner.next.val === walker.val){
        runner.next = runner.next.next;
      }
      else{
        runner = runner.next;
      }
    }
    if(walker.next === null){ return head; }
    walker = walker.next;
    runner = walker;
  }
  return head;
}