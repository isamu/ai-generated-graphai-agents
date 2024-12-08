
import { AgentFunction, AgentFunctionInfo } from "graphai";

// 素因数分解を行う関数
const primeFactorization = (num: number): number[] => {
  const factors: number[] = [];
  let divisor = 2;
  
  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  
  return factors;
};

export const primefactorizationagentAgent: AgentFunction = async ({ params, namedInputs }) => {
  const number = parseInt(namedInputs.number, 10);
  
  if (isNaN(number) || number < 2) {
    throw new Error("Invalid input: Please provide a number greater than or equal to 2.");
  }
  
  const factors = primeFactorization(number);
  
  return { params, namedInputs, result: factors };
};

const primefactorizationagentAgentInfo: AgentFunctionInfo = {
  name: "primefactorizationagentAgent",
  agent: primefactorizationagentAgent,
  mock: async ({ params, namedInputs }) => {
    return { params, namedInputs, result: [2, 3] }; // Mock response for testing
  },
  samples: [{
    params: {},
    inputs: {number: "18"},
    result: {
      params: {},
      namedInputs: {number: "18"},
      result: [2, 3, 3]
    },
  }],
  description: "This agent performs prime factorization on a given number.",
  category: ["Mathematics"],
  author: "me",
  repository: "https://github.com/receptron/graphai/",
  license: "MIT",
};

export default primefactorizationagentAgentInfo;