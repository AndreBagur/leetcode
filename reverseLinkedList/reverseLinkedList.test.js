const { reverseList, ListNode } = require('./reverseLinkedList.js');

describe('reverseList', () => {
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
  it('should return the reversed list for Example 1', () => {
    const head = arrayToLinkedList([1,2,3,4,5]);
    const expected = [5,4,3,2,1];
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('should return the reversed list for Example 2', () => {
    const head = arrayToLinkedList([1,2]);
    const expected = [2,1];
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('should return null for empty list', () => {
    const head = null;
    const result = reverseList(head);
    expect(result).toEqual(null);
  });
});
