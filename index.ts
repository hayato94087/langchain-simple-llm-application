import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import 'dotenv/config'

// model
const model = new ChatOpenAI({model: "gpt-3.5-turbo"});

// system
const system = `あなたは入力された単語を英語に変換するアシスタントです`;

// messages
const messages = [
  new SystemMessage(system),
  new HumanMessage("昔々あるところにおじいさんとおばあさんがいました"),
];

// parser
const parser = new StringOutputParser();

const chain = model.pipe(parser);

const result = await chain.invoke(messages);
console.log(result);