// @ts-check
/**
 * @typedef {'MATCH' | 'MISMATCH' | 'NA'} ChunkType
 */

/**
 * @typedef {Object} ChunkInfo
 * @property {string} wordlet
 * @property {ChunkType} type
 */

/**
 * Breaks targetWord into chunks of matched, mismatched & not-attempted portion length-wise
 * P.S. Compares the input in case-sensitive way
 * @param {string} input User input to match
 * @param {string} targetWord Full word to match against
 * @returns {Array<ChunkInfo>}
 */
export const matchInput = (input, targetWord) => {
  /**
   * @type {Array<ChunkInfo>}
   */
  const chunkList = [];

  /**
   * @type {ChunkType?}
   */
  let runningChunkType = null;

  /**
   * @type {string}
   */
  let runningChunk = "";
  const commonLen = Math.min(input.length, targetWord.length);
  for (let i = 0; i < commonLen; i++) {
    /**
     * @type {ChunkType}
     */
    const currentCharType = targetWord[i] === input[i] ? "MATCH" : "MISMATCH";
    if (currentCharType !== runningChunkType) {
      if (runningChunk && runningChunkType) {
        chunkList.push({
          wordlet: runningChunk,
          type: runningChunkType,
        });
        runningChunk = "";
        runningChunkType = null;
      }
      runningChunkType = currentCharType;
    }
    runningChunk += targetWord[i];
  }
  if (runningChunk && runningChunkType) {
    chunkList.push({
      wordlet: runningChunk,
      type: runningChunkType,
    });
  }

  if (targetWord.length > commonLen) {
    chunkList.push({
      wordlet: targetWord.substr(commonLen),
      type: "NA",
    });
  }
  return chunkList;
};
