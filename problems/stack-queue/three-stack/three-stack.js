function createThreeStack() {
  const stacks = [];
  let [startOneIdx, endOneIdx] = [0, 0];
  let [startTwoIdx, endTwoIdx] = [0, 0];
  let [startThreeIdx, endThreeIdx] = [0, 0];

  return {
    pushOne: (el) => {
      stacks.splice(startOneIdx, 0, el);
      endOneIdx++;
      startTwoIdx++;
      endTwoIdx++;
      startThreeIdx++;
      endThreeIdx++;
    },
    popOne: function () {
      if (this.isOneEmpty()) {
        return null;
      }
      stacks.splice(startOneIdx, 1);
      endOneIdx--;
      startTwoIdx--;
      endTwoIdx--;
      startThreeIdx--;
      endThreeIdx--;
    },
    peekOne: function () {
      if (this.isOneEmpty()) {
        return null;
      }
      return stacks[startOneIdx];
    },
    isOneEmpty: () => {
      return endOneIdx === startOneIdx;
    },
    pushTwo: (el) => {
      stacks.splice(startTwoIdx, 0, el);
      endTwoIdx++;
      startThreeIdx++;
      endThreeIdx++;
    },
    popTwo: function () {
      if (this.isTwoEmpty()) {
        return null;
      }
      stacks.splice(startTwoIdx, 1);
      endTwoIdx--;
      startThreeIdx--;
      endThreeIdx--;
    },
    peekTwo: function () {
      if (this.isTwoEmpty()) {
        return null;
      }
      return stacks[startTwoIdx];
    },
    isTwoEmpty: () => {
      return endTwoIdx === startTwoIdx;
    },
    pushThree: (el) => {
      stacks.splice(startThreeIdx, 0, el);
      endThreeIdx++;
    },
    popThree: function () {
      if (this.isThreeEmpty()) {
        return null;
      }
      stacks.splice(startThreeIdx, 1);
      endThreeIdx--;
    },
    peekThree: function () {
      if (this.isThreeEmpty()) {
        return null;
      }
      return stacks[startThreeIdx];
    },
    isThreeEmpty: () => {
      return endThreeIdx === startThreeIdx;
    },
  };
}

const stacks = createThreeStack();

stacks.pushThree(3);
stacks.pushTwo(2);
stacks.popThree();
stacks.pushOne(1);

console.log(stacks.peekThree());
console.log(stacks.peekTwo());
console.log(stacks.peekOne());
