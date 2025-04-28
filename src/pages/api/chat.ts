import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));