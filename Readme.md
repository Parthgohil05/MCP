# 🐦 AI TweetBot — Generate and Post Smart Tweets Using LLMs

This is a Node.js-based command-line application that lets you generate and post professional tweets using [Together AI's LLM](https://docs.together.ai/) and publish them directly to your Twitter account using the official [Twitter API v2](https://developer.twitter.com/en/docs/twitter-api).

---

## ✨ Features

- 🤖 Generate engaging tweets using `meta-llama/Llama-3.3-70B-Instruct-Turbo-Free` from Together AI
- 🐦 Automatically posts tweets to your Twitter profile
- 🧠 Keeps tweets between 30–50 words (within Twitter’s 280-character limit)
- 💬 Conversational CLI — input new prompts continuously
- 🔐 Secure usage with `.env`-based API key storage

---

## 🚀 Demo

```bash
✌️  Welcome to AI TweetBot
✍️  What would you like to tweet about? AI is transforming education

 Generating tweet...

 Tweet content:
"AI is revolutionizing education by offering personalized learning experiences, instant feedback, and smarter content delivery. It's transforming classrooms into interactive, data-driven environments that adapt to each student’s pace and style."

✅ Operation done, sir. Tweet ID: 1234567890
````

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-tweetbot.git
cd ai-tweetbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up `.env` File

Create a `.env` file in the root directory with the following content:

```env
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
```

> You can generate these credentials from [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard).

---

## 🧠 How It Works

1. Takes user input as a prompt.
2. Sends it to Together AI to generate a tweet (30–50 words).
3. Logs the tweet preview.
4. Posts it to Twitter using `twitter-api-v2`.

---

## 📦 Dependencies

- `readline` — Node's built-in CLI input tool
- `dotenv` — for loading environment variables securely
- `twitter-api-v2` — official client for Twitter API
- `together-ai` — SDK for accessing Together AI models

---

## 🏁 Run the App

```bash
node index.js
```

To exit the loop:

```
✍️  What would you like to tweet about? exit
```

---

## ✅ To-Do / Improvements

- [ ] Add option to generate threads

- [ ] Log tweet history

- [ ] Add retry mechanism on failure

- [ ] Support other models (Claude, GPT, etc.)

---

## 📜 License

MIT License © 2025 Parth Gohil

---

## ❤️ Contribute

Feel free to fork the repo and raise PRs to improve functionality, performance, or integrations. Let’s make tweeting smarter!

```

---

Let me know if you'd like to convert this into a PDF, add GIFs/screenshots, or push it to GitHub with a proper structure.
```
