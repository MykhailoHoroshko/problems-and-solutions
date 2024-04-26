const { LinkedListNode } = require("../../linked-lists/common");

class Animal {
  type = "unknown";
  name = "unknown";
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  type = "dog";
}

class Cat extends Animal {
  type = "cat";
}

class AnimalShelter {
  tail = null;
  head = null;

  enqueue(animal) {
    const animalNode = new LinkedListNode(animal);

    if (this.tail) {
      this.tail.next = animalNode;
      this.tail = this.tail.next;
    } else {
      this.tail = animalNode;
    }

    if (this.head === null) {
      this.head = animalNode;
    }
  }

  dequeueAny() {
    if (this.isEmpty()) {
      throw new Error("The shelter is empty");
    }

    const animalNode = this.head;
    this.head = this.head.next;
    return animalNode.val;
  }

  dequeueDog() {
    if (this.isEmpty()) {
      throw new Error("The shelter is empty");
    }

    if (this.head.val instanceof Dog) {
      const node = this.head;
      this.head = this.head.next;
      return node.val;
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr) {
      if (curr.val instanceof Dog) {
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (curr === null) {
      throw new Error("No dogs");
    }

    const el = curr.val;
    prev.next = curr.next;
    return el;
  }

  dequeueCat() {
    if (this.isEmpty()) {
      throw new Error("The shelter is empty");
    }

    if (this.head.val instanceof Cat) {
      const node = this.head;
      this.head = this.head.next;
      return node.val;
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr) {
      if (curr.val instanceof Cat) {
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (curr === null) {
      throw new Error("No cats");
    }

    const el = curr.val;
    prev.next = curr.next;
    return el;
  }

  isEmpty() {
    return this.head === null;
  }
}

const shelter = new AnimalShelter();
shelter.enqueue(new Dog("dipsy"));
shelter.enqueue(new Cat("tinki"));
shelter.enqueue(new Cat("lala"));
shelter.enqueue(new Dog("pop"));

const animal = shelter.dequeueAny();
console.log(animal);
const dog = shelter.dequeueDog();
// shelter.dequeueDog();
const cat = shelter.dequeueCat();
console.log(dog, cat);
shelter.dequeueAny();
shelter.dequeueAny();
