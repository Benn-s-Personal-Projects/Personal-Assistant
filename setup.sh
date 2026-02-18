#!/bin/bash

echo "🚀 Setting up your Personal Assistant Mobile App..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ npm is installed: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You're ready to go!"
    echo ""
    echo "Next steps:"
    echo "1. Make sure Expo Go is installed on your phone"
    echo "2. Run: npm start"
    echo "3. Scan the QR code with Expo Go"
    echo "4. Start chatting with your personal assistant!"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
