const { copyRandomList, Node } = require('./copyListWithRandomPointer.js');

// Helper function to create a linked list from an array of [value, randomIndex]
function buildLinkedList(arr) {
  if (!arr.length) return null;
  const nodes = arr.map(([val]) => new Node(val));
  arr.forEach(([_, randomIndex], i) => {
    nodes[i].next = nodes[i + 1] || null;
    nodes[i].random = typeof randomIndex === 'number' ? nodes[randomIndex] : null;
  });
  return nodes[0];
}

// Helper function to compare two linked lists
function areIdenticalCopies(headA, headB) {
  let currA = headA, currB = headB;
  while (currA && currB) {
    if (currA === currB) return false; // They should not be the same object
    if (currA.val !== currB.val) return false; // Values should be equal
    if ((currA.random && !currB.random) || (!currA.random && currB.random)) return false; // Both should or shouldn't have random
    if (currA.random && currB.random && currA.random.val !== currB.random.val) return false; // Random values should be equal
    currA = currA.next;
    currB = currB.next;
  }
  return !currA && !currB; // Both should end at the same time
}

// Test case: Empty list
test('copies an empty list', () => {
  expect(copyRandomList(null)).toBeNull();
});

// Test case: No random pointers
test('copies a list without random pointers', () => {
  const head = buildLinkedList([[1, null], [2, null]]);
  const copiedHead = copyRandomList(head);
  expect(areIdenticalCopies(head, copiedHead)).toBeTruthy();
});

// Test case: Random pointers pointing to null
test('copies a list with random pointers pointing to null', () => {
  const head = buildLinkedList([[1, null], [2, null], [3, null]]);
  const copiedHead = copyRandomList(head);
  expect(areIdenticalCopies(head, copiedHead)).toBeTruthy();
});

// Test case: Example 1
test('copies a list according to Example 1', () => {
  const head = buildLinkedList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
  const copiedHead = copyRandomList(head);
  expect(areIdenticalCopies(head, copiedHead)).toBeTruthy();
});

// Test case: Example 2
test('copies a list according to Example 2', () => {
  const head = buildLinkedList([[1, 1], [2, 1]]);
  const copiedHead = copyRandomList(head);
  expect(areIdenticalCopies(head, copiedHead)).toBeTruthy();
});

// Test case: Example 3
test('copies a list according to Example 3', () => {
  const head = buildLinkedList([[3, null], [3, 0], [3, null]]);
  const copiedHead = copyRandomList(head);
  expect(areIdenticalCopies(head, copiedHead)).toBeTruthy();
});
