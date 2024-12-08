
import { AgentFunction, AgentFunctionInfo } from "graphai";

export const wordcountandstatisticsAgent: AgentFunction = async ({ namedInputs }) => {
  const text: string = namedInputs.text || "";
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const numberOfWord = words.length;
  
  const lengthStatistics = words.reduce((acc, word) => {
    const length = word.length;
    acc[length] = (acc[length] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return { numberOfWord, statics: lengthStatistics };
};

const wordcountandstatisticsAgentInfo: AgentFunctionInfo = {
  name: "wordcountandstatisticsAgent",
  agent: wordcountandstatisticsAgent,
  mock: wordcountandstatisticsAgent,

  samples: [{
    params: {},
    inputs: { text: "Hello world this is a test" },
    result: {
      numberOfWord: 6,
      statics: {
        5: 2, // "Hello", "world"
        4: 2, // "this", "test"
        2: 1, // "is"
        1: 1, // "a"
      },
    },
  }],
  description: "Counts the number of words in a text and provides statistics on the length of each word.",
  category: ["Text"],
  author: "me",
  repository: "https://github.com/receptron/graphai/",
  license: "MIT",
};

export default wordcountandstatisticsAgentInfo;