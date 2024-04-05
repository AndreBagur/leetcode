const { mergeTwoLists, ListNode } = require('./mergeTwoSortedLists.js');

describe('mergeTwoLists', () => {
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
  it('should merge two lists for Example 1', () => {
    const list1 = arrayToLinkedList([1,2,4]);
    const list2 = arrayToLinkedList([1,3,4]);
    const expected = [1,1,2,3,4,4];
    const result = mergeTwoLists(list1, list2);
    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('should merge two lists for Example 2', () => {
    const list1 = null;
    const list2 = null;
    const expected = [];
    const result = mergeTwoLists(list1, list2);
    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('should merge two lists for Example 3', () => {
    const list1 = null;
    const list2 = arrayToLinkedList([0]);
    const expected = [0];
    const result = mergeTwoLists(list1, list2);
    expect(linkedListToArray(result)).toEqual(expected);
  });
});
