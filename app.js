const { Configuration, OpenAI } = require("openai");
const readline = require("readline-sync");

// Replace with your OpenAI API key
const apiKey = "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";

// Configure the OpenAI API client
const openai = new OpenAI({apiKey,});

const run = async () => {
    while (true) {
        const userPrompt = readline.question("Enter your prompt (or type 'quit' to exit): ");
        if (userPrompt.toLowerCase() === "quit") {
            break;
        }

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-instruct",
                max_tokens: 150, // Adjust the maximum number of tokens for response length
                prompt: userPrompt,
                temperature: 0.7, // Adjust the temperature to control creativity (0 = deterministic, 1 = random)
            });

            console.log("ChatGPT response:", response.data.choices[0].text)
    }
};

run();
