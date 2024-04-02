const { addTwoNumbers, ListNode } = require('./addTwoNumbers.js');

describe('addTwoNumbers', () => {
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
  it('should return the correct sum for Example 1', () => {
    const l1 = arrayToLinkedList([2,4,3]);
    const l2 = arrayToLinkedList([5,6,4]);
    const expected = [7,0,8];
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('should return the correct sum for Example 2', () => {
    const l1 = arrayToLinkedList([0]);
    const l2 = arrayToLinkedList([0]);
    const expected = [0];
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('should return the correct sum for Example 3', () => {
    const l1 = arrayToLinkedList([9,9,9,9,9,9,9]);
    const l2 = arrayToLinkedList([9,9,9,9]);
    const expected = [8,9,9,9,0,0,0,1];
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual(expected);
  });
});
