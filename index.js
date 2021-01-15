class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(number) {
    if (this.from > this.to &&
        this.to < this.from) {
      throw new RangeError('Input incorrect values');
    }
    if (typeof number !== 'number') {
      throw new TypeError('Value must be a number');
    } else {
      return number;
    }
  }
  get from() {
    return this._from;
  }
  set to(number) {
    if (this.from > this.to &&
        this.to < this.from) {
      throw new RangeError('Input incorrect values');
    }
    if (typeof number !== 'number') {
      throw new TypeError('Value must be a number');
    } else {
      return number;
    }
  }
  get to() {
    return this._to;
  }
  set _from(number) {
    if (this._from > this._to &&
        this._to < this._from) {
      throw new RangeError('Input incorrect values');
    }
    if (typeof number !== 'number') {
      throw new TypeError('Value must be a number');
    } else {
      return number;
    }
  }
  get _from() {
    return this._from;
  }
  set _to(number) {
    if (this._from > this._to &&  
        this._to < this._from) {
      throw new RangeError('Input incorrect values');
    }
    if (typeof number !== 'number') {
      throw new TypeError('Value must be a number');
    } else {
      return number;
    }
  }
  get _to() {
    return this._to;
  }

  get range() {
    return [this.from, this.to];
  }
  validate(checkFrom, checkTo) {
    if (
      checkFrom >= this._from &&
      checkTo <= this._to &&
      checkFrom >= this.from &&
      checkTo <= this.to
    ) {
      return 'Array is valid';
    } else {
      return 'Array is not valid';
    }
  }
}
let myArray = new RangeValidator(1, 10);
