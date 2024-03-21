const { removeNthFromEnd, ListNode } = require('./removeNthNodeFromEndOfList');

describe('removeNthFromEnd', () => {
  test('removes the nth node from the end of the list', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    // Remove the second node from the end
    const result = removeNthFromEnd(head, 2);

    // Expected list after removal: 1 -> 2 -> 3 -> 5
    expect(result.val).toEqual(1);
    expect(result.next.val).toEqual(2);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next).toBeNull();
  });

  test('removes the only node from the list', () => {
    // Create a linked list with only one node: 1
    const head = new ListNode(1);

    // Remove the only node from the list
    const result = removeNthFromEnd(head, 1);

    // Expected result should be null as the list is empty
    expect(result).toBeNull();
  });

  test('removes the head node from the list', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    // Remove the head node
    const result = removeNthFromEnd(head, 5);

    // Expected list after removal: 2 -> 3 -> 4 -> 5
    expect(result.val).toEqual(2);
    expect(result.next.val).toEqual(3);
    expect(result.next.next.val).toEqual(4);
    expect(result.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next).toBeNull();
  });
});

