import readline from 'readline';
import { TwitterApi } from 'twitter-api-v2';
import 'dotenv/config';
import Together from 'together-ai';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const together = new Together();

async function generateTweet(prompt) {
  const response = await together.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Write a tweet (30-50 words) about: ${prompt}`
      }
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"
  });

  return response.choices[0].message.content.trim();
}

async function postTweet(text) {
  const { data } = await twitterClient.v2.tweet(text);
  return data.id;
}

function askUser() {
  rl.question('✍️  What would you like to tweet about? ', async (userPrompt) => {
    if (userPrompt.toLowerCase() === 'exit') {
      console.log('See you soon sir,,');
      rl.close();
      return;
    }

    console.log('\n Generating tweet...');
    try {
      const tweetText = await generateTweet(userPrompt);
      console.log(`\n Tweet content:\n"${tweetText}"\n`);
      
      const tweetId = await postTweet(tweetText);
      console.log(`✅ Operation done, sir. Tweet ID: ${tweetId}\n`);
    } catch (err) {
      console.error('❌ Failed to generate/post tweet:', err.message);
    }

    askUser(); // repeat the loop
  });
}

// Start interaction
console.log('✌️  Welcome to AI TweetBot');
askUser();
