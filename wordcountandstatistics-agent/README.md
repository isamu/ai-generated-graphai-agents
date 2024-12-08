
# wordcountandstatistics_agent for GraphAI

Counts

### Install

```sh
yarn add wordcountandstatistics_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { wordcountandstatisticsAgent } from "wordcountandstatistics_agent";

const agents = { wordcountandstatisticsAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- wordcountandstatisticsAgent - Counts the number of words in a text and provides statistics on the length of each word.

### Input/Output/Params Schema & samples
 - [wordcountandstatisticsAgent](https://github.com/receptron/graphai/blob/main/docs/agentDocs/Text/wordcountandstatisticsAgent.md)

### Input/Params example
 - wordcountandstatisticsAgent

```typescript
{
  "inputs": {
    "text": "Hello world this is a test"
  },
  "params": {}
}
```










