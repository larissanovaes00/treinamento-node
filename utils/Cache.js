const mCache = require("memory-cache");

const Cache = {
  duration: 1000 * 60 * 10,
  getCache(key) {
    const cachedContent = mCache.get(key);
    if (cachedContent) {
      return JSON.parse(cachedContent);
    }
    return false;
  },
  setCache(key, content) {
    return mCache.put(key, content, this.duration);
  },
};

module.exports = Cache;
