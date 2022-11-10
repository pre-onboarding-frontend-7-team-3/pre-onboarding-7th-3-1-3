const getCachedData = async (TrieWordList: Array<string>) => {
  const cacheStorage = await caches.open("search");

  let responsedCache: Response | undefined | null = null;

  // eslint-disable-next-line no-restricted-syntax
  for await (const targetWord of TrieWordList) {
    responsedCache = await cacheStorage.match(
      `http://localhost:4000/sick?sickNm_like=${targetWord}`
    );
    if (responsedCache !== undefined) {
      break;
    }
  }
  return responsedCache;
};

export default getCachedData;
