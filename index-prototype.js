/* Создаём прототип для MyArray(тут будет храниться логика) */
function MyArrayProto() {
    /* Уже создан пустой новый объект (this) */
    this.push = function push() {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        ++this.length;
      }
      return this.length;
    };
  
    this.pop = function pop() {
      if (this.length <= 0) {
        return;
      }
      const lastItem = this[this.length - 1];
      delete this[--this.length];
      return lastItem;
    };
  
    this.forEach = function forEach(cb) {
      for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
      }
    };
  
    this.some = function some(checkFunction) {
      for (let i = 0; i < this.length; i++) {
        if (checkFunction(this[i], i, this)) {
          return true;
        }
      }
      return false;
    };
  
    this.every = function every(checkFunc) {
      for (let i = 0; i < this.length; i++) {
        if (!checkFunc(this[i], i, this)) {
          return false;
        }
      }
      return true;
    };
  
    this.filter = function filter(checkFunc) {
      const result = new MyArray();
  
      for (let i = 0; i < this.length; i++) {
        if (checkFunc(this[i], i, this)) {
          result.push(this[i]);
        }
      }
      
      return result;
    };
  }
  