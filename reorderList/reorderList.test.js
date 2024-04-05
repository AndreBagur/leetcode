const { reorderList, ListNode } = require('./reorderList.js');

describe('reorderList', () => {
  // Helper function to convert array to linked list
  const arrayToLinkedList = (arr) => {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  };

  // Helper function to convert linked list to array
  const linkedListToArray = (head) => {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  };

  // Test cases
  it('should reorder the list correctly for Example 1', () => {
    const head = arrayToLinkedList([1,2,3,4]);
    reorderList(head);
    const expected = [1,4,2,3];
    expect(linkedListToArray(head)).toEqual(expected);
  });

  it('should reorder the list correctly for Example 2', () => {
    const head = arrayToLinkedList([1,2,3,4,5]);
    reorderList(head);
    const expected = [1,5,2,4,3];
    expect(linkedListToArray(head)).toEqual(expected);
  });
});
