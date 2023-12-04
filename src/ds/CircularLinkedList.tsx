import { LinkedListNode } from "./LinkedListNode";

interface ICircularLinkedList {
  head: null | LinkedListNode;
  tail: null | LinkedListNode;
}

export class CircularLinkedList implements ICircularLinkedList {
  head: null | LinkedListNode;
  tail: null | LinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }
}
