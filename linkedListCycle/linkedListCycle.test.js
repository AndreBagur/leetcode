const { hasCycle, ListNode } = require('./linkedListCycle.js');

// Helper function to create a linked list from an array
function buildLinkedList(arr) {
  let head = new ListNode(0); // Temporary dummy node
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next; // Return actual head, skipping dummy
}

// Helper function to introduce a cycle in the list
function createCycle(head, pos) {
  if (pos < 0) return head; // No cycle
  let tail = head,
      cycleNode = null,
      index = 0;
  while (tail.next !== null) {
    if (index === pos) cycleNode = tail;
    tail = tail.next;
    index++;
  }
  tail.next = cycleNode; // Create cycle
}

// Test case: Empty list
test('returns false for an empty list', () => {
  expect(hasCycle(null)).toBeFalsy();
});

// Test case: Single-node list without a cycle
test('returns false for a single-node list without a cycle', () => {
  const head = new ListNode(1);
  expect(hasCycle(head)).toBeFalsy();
});

// Test case: Single-node list with a cycle
test('returns true for a single-node list with a cycle', () => {
  const head = new ListNode(1);
  head.next = head; // Create cycle
  expect(hasCycle(head)).toBeTruthy();
});

// Test case: Multi-node list without a cycle
test('returns false for a multi-node list without a cycle', () => {
  const head = buildLinkedList([3,2,0,-4]);
  expect(hasCycle(head)).toBeFalsy();
});

// Test case: Multi-node list with a cycle
test('returns true for a multi-node list with a cycle', () => {
  const head = buildLinkedList([3,2,0,-4]);
  createCycle(head, 1); // Create cycle back to node at index 1
  expect(hasCycle(head)).toBeTruthy();
});
