interface ILinkedListNode {
  data: string;
  next: null | LinkedListNode;
}

export class LinkedListNode implements ILinkedListNode {
  data: string;
  next: null | LinkedListNode;

  constructor(data: string) {
    this.data = data;
    this.next = null;
  }
}
