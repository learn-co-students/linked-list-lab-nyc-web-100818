// let collection = {
//   rkjasj: { name: "sam", next: "asnan" },
//   asnan: { name: "charlie", next: null },
//   whana: { name: "susie", next: "rkjasj" }
// };
// let linkedList = "whana" // use name of starting node

function getName(node) {
  return node.name;
}

function headNode(firstAddress, collection) {
  return collection[firstAddress];
}

function next(node, collection) {
  const nextNode = node.next;
  return collection[nextNode];
}

function nodeAt(index, firstAddress, collection) {
  let node = headNode(firstAddress, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, firstAddress, collection) {
  let address = firstAddress;
  for (let i = 0; i <= index - 1; i++) {
    address = collection[address].next;
  }
  return address;
}

function indexAt(node, collection, firstAddress) {
  let nodeToCheck = headNode(firstAddress, collection),
    index = 0,
    found = false;

  while (!found && nodeToCheck.next) {
    if (nodeToCheck === node) {
      found = true;
    } else {
      nodeToCheck = next(nodeToCheck, collection);
      index++;
    }
  }
  return found ? index : -1;
}

function insertNodeAt(index, newAddress, firstAddress, collection) {
  const currentNodeAddress = addressAt(index, firstAddress, collection);

  if (index > 0) {
    // prev node points to new node
    const prevNode = nodeAt(index - 1, firstAddress, collection);
    prevNode.next = newAddress;
  }

  // new node points to whatever it's inserted before
  collection[newAddress].next = currentNodeAddress;
}

function deleteNodeAt(index, firstAddress, collection) {
  const prevNode = nodeAt(index - 1, firstAddress, collection);
  const nodeToDelete = nodeAt(index, firstAddress, collection);
  prevNode.next = nodeToDelete.next;
}
