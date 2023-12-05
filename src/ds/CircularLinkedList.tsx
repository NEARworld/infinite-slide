import { ILinkedListNode, LinkedListNode } from "./LinkedListNode";

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

  append(data: ILinkedListNode["data"]) {
    const newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let currentNode = this.head;

    while (this.tail !== currentNode && currentNode.next)
      currentNode = currentNode.next;

    currentNode.next = newNode;
    this.tail = newNode;
    this.tail.next = this.head;
  }

  *traverse() {
    let currentNode = this.head;

    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }
}
