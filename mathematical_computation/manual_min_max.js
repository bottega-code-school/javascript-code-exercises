class ArrayHelper {
  constructor(arr) {
    this.arr = arr;
  }

  min() {
    // n lg n complexity
    // return this.arr.sort()[0];

    // let smallest = this.arr[0];

    // this.arr.forEach(element => {
    //   if (element < smallest) {
    //     smallest = element;
    //   }
    // }, this);

    return this._min_max({ min: true });
  }

  max() {
    return this._min_max({ max: true });
  }

  _min_max(options = { min: false, max: false }) {
    let finalNum = this.arr[0];

    const operator = options.min ? "<" : ">";

    this.arr.forEach(element => {
      if (eval(element + operator + finalNum)) {
        finalNum = element;
      }
    }, this);

    return finalNum;
  }
}

arrayOfNums = [21, 3, 1, 41, 7];

new ArrayHelper(arrayOfNums).min(); //?
new ArrayHelper(arrayOfNums).max(); //?
