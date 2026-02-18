# Personal Assistant Mobile App

Your personal AI assistant powered by Claude and Supabase - built specifically for you!

## Features

✅ **Chat with Claude AI** - Ask questions about your personal data
✅ **Supabase Integration** - Access your utility bills, transactions, tasks, and more
✅ **Smart Context Loading** - Automatically fetches relevant data based on your questions
✅ **Beautiful Mobile UI** - Clean, modern chat interface
✅ **Cross-Platform** - Works on iOS and Android

## What You Can Ask

- "What's my latest utility bill?"
- "How much did I spend last month?"
- "What are my upcoming tasks?"
- "Show me my property information"
- "What insurance policies do I have?"
- "Analyze my spending patterns"
- And anything else about your personal data!

## Quick Start Guide

### Prerequisites

1. **Install Expo Go** on your phone:
   - iOS: Download from App Store
   - Android: Download from Google Play Store

2. **Install Node.js** on your computer (if not already installed):
   - Visit https://nodejs.org/
   - Download and install the LTS version

### Installation Steps

**Option 1: Clone from GitHub (Recommended)**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Benn-s-Personal-Projects/Personal-Assistant.git
   cd Personal-Assistant
   ```

2. **Setup your config file**
   ```bash
   cp config.example.js config.js
   ```
   Then edit `config.js` and add your API keys (see SECURITY.md for details)

**Option 2: Download ZIP**

1. **Navigate to the project folder**
   ```bash
   cd personal-assistant-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open on your phone**
   - A QR code will appear in your terminal/browser
   - Open Expo Go app on your phone
   - Scan the QR code with:
     - iOS: Camera app
     - Android: Expo Go app scanner
   
5. **Start chatting!**
   - The app will load on your phone
   - Start asking questions about your personal data

## Configuration

All your credentials are already configured in `config.js`:
- ✅ Supabase URL and API key
- ✅ Anthropic API key
- ✅ Claude model version

## Data Access

The app has access to:
- 📊 Utility Bills (water, electricity, rates, sewerage, refuse)
- 💰 Financial Transactions
- ✅ Tasks and To-dos
- 📝 Notes
- 👥 Contacts
- 🏠 Property Information
- 🛡️ Insurance Policies

## How It Works

1. **You ask a question** (e.g., "What's my water usage?")
2. **The app analyzes** your question to determine what data is needed
3. **Fetches from Supabase** - Gets relevant data from your database
4. **Sends to Claude** - Combines your question with your personal data
5. **Claude responds** - Intelligent answer based on your actual data
6. **You get insights** - Personalized, accurate information

## Example Queries

### Utility Bills
- "What's my current utility bill amount?"
- "How much water did I use last month?"
- "Show me my electricity charges"

### Finances
- "What did I spend money on recently?"
- "How much did I spend on groceries?"
- "Show me my biggest expenses"

### Tasks & Planning
- "What tasks do I need to complete?"
- "What's on my to-do list?"

### Property & Insurance
- "What's my property valuation?"
- "What insurance policies do I have?"
- "When is my insurance renewal?"

## Project Structure

```
personal-assistant-mobile/
├── App.js                  # Main app component with chat UI
├── config.js               # API keys and configuration
├── supabaseService.js      # Supabase data fetching functions
├── claudeService.js        # Claude AI integration
├── package.json            # Dependencies
└── README.md              # This file
```

## Troubleshooting

### App won't start?
- Make sure you ran `npm install` first
- Check that Node.js is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again

### Can't scan QR code?
- Make sure your phone and computer are on the same WiFi network
- Try using the "Tunnel" connection mode in Expo

### Getting API errors?
- Check that your API keys are correct in `config.js`
- Verify your Supabase database is accessible
- Check your Anthropic API credit balance

### No data showing up?
- Verify data exists in your Supabase tables
- Check the browser/terminal console for error messages

## Security Notes

⚠️ **Important**: This app stores API keys in the code for simplicity. For production use, you should:
- Use environment variables
- Implement proper authentication
- Store keys securely using Expo SecureStore
- Add server-side API proxy to hide keys from client

For now, this is perfect for personal use!

## Next Steps

### Want to deploy as a standalone app?
```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

### Want to add more features?
The code is fully customizable! You can:
- Add voice input
- Enable push notifications
- Add data visualization
- Create custom commands
- And much more!

## Need Help?

If you run into issues:
1. Check the error messages in the terminal
2. Look at the Expo Go app logs
3. Review the troubleshooting section above
4. Check Expo documentation: https://docs.expo.dev/

## Credits

Built with ❤️ using:
- React Native & Expo
- Supabase
- Claude AI by Anthropic

---

**Your personal assistant is ready to help! 🚀**
