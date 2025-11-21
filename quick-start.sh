#!/bin/bash
# Quick Start Script for Portfolio React

echo "🚀 Portfolio React - Quick Start"
echo "================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ NPM version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Show available commands
echo "📝 Available Commands:"
echo "  npm run dev     → Start development server (http://localhost:5173)"
echo "  npm run build   → Build for production"
echo "  npm run preview → Preview production build"
echo "  npm run lint    → Check code quality"
echo ""

# Ask user what to do
read -p "Start development server now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🎉 Starting development server..."
    npm run dev
else
    echo "✨ Setup complete! Run 'npm run dev' to start."
fi
