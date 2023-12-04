export type LinkedListNodeData = {
  src: string;
};

interface ILinkedListNode {
  data: LinkedListNodeData;
  next: null | LinkedListNode;
}

export class LinkedListNode implements ILinkedListNode {
  data: LinkedListNodeData;
  next: null | LinkedListNode;

  constructor(data: LinkedListNodeData) {
    this.data = data;
    this.next = null;
  }
}
