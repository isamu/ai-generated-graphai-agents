
# primefactorizationagent_agent for GraphAI

This

### Install

```sh
yarn add primefactorizationagent_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { primefactorizationagentAgent } from "primefactorizationagent_agent";

const agents = { primefactorizationagentAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- primefactorizationagentAgent - This agent performs prime factorization on a given number.

### Input/Output/Params Schema & samples
 - [primefactorizationagentAgent](https://github.com/receptron/graphai/blob/main/docs/agentDocs/Mathematics/primefactorizationagentAgent.md)

### Input/Params example
 - primefactorizationagentAgent

```typescript
{
  "inputs": {
    "number": "18"
  },
  "params": {}
}
```










