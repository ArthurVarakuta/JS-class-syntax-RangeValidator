class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }
  set from(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Value must be a number');
    } else {
      return number;
    }
  }
  get from() {
    return;
  }
  set to(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Value must be a number');
    } else {
      return number;
    }
  }
  get to() {
    return;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(checkFrom, checkTo) {
    if (checkFrom >= this._from && checkTo <= this._to) {
      return true;
    } else {
      return false;
    }
  }
}
let myArray = new RangeValidator(1, 10);
