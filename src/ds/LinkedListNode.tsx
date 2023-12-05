export interface ILinkedListNode {
  data: {
    src: string;
    nth: number;
  };
  next: null | LinkedListNode;
}

export class LinkedListNode implements ILinkedListNode {
  data: {
    src: string;
    nth: number;
  };
  next: null | LinkedListNode;

  constructor(data: ILinkedListNode["data"]) {
    this.data = data;
    this.next = null;
  }
}
