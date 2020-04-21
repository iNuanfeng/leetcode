/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.pool = new Map()
  this.capacity = capacity
};

LRUCache.prototype.getLength = function() {
  var count = 0
  this.pool.forEach(item => {
    count++
  })
  return count
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  var tmp = this.pool.get(key)
  if (tmp === undefined) {
    return -1
  } else {
    this.pool.delete(key)
    this.pool.set(key, tmp)
    return tmp
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.pool.get(key) !== undefined) {
    this.pool.delete(key)
  } else {
    if (this.getLength() >= this.capacity) {
      for (let item of this.pool) {
        this.pool.delete(item[0])
        break
      }
    }
  }

  this.pool.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache( 2 /* capacity */ );

cache.put(2, 1);
cache.put(1, 1);
console.log(cache.get(2))
console.log(cache.pool)
cache.put(4, 1);    // evicts key 2
console.log(cache.pool)

console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(2));       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
