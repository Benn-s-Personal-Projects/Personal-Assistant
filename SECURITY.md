# Security Guidelines

## ⚠️ Important: API Keys

This project uses sensitive API keys that should **NEVER** be committed to GitHub.

### Setup Instructions

1. **Copy the config template**:
   ```bash
   cp config.example.js config.js
   ```

2. **Add your credentials** to `config.js`:
   - Supabase URL and Anon Key
   - Anthropic API Key

3. **Never commit `config.js`**:
   - This file is already in `.gitignore`
   - It contains your private API keys

### Your API Keys Location

Your actual API keys are stored securely in your Supabase database in the `api_keys` table.

To retrieve them:
```sql
SELECT service_name, key_name, api_key 
FROM api_keys 
WHERE service_name IN ('Anthropic', 'GitHub');
```

### Supabase Credentials

Your Supabase project details:
- **Project ID**: xpnnvcpzqimtgqghwxdt
- **URL**: https://xpnnvcpzqimtgqghwxdt.supabase.co

To get your Supabase anon key:
1. Go to Supabase Dashboard
2. Project Settings → API
3. Copy the `anon` public key

### Best Practices

✅ **DO**:
- Keep `config.js` in `.gitignore`
- Use environment variables in production
- Rotate API keys regularly
- Use different keys for development/production

❌ **DON'T**:
- Commit API keys to GitHub
- Share keys in public channels
- Use production keys in development
- Hard-code sensitive data

### If Keys Are Exposed

1. **Immediately rotate** all exposed keys:
   - Anthropic: console.anthropic.com/settings/keys
   - Supabase: Project Settings → API
   - GitHub: Settings → Developer settings → Tokens

2. **Update** your `config.js` with new keys
3. **Update** the keys in your Supabase `api_keys` table

### Environment Variables (Alternative)

For better security, you can use environment variables:

1. Install: `npm install react-native-dotenv`
2. Create `.env` file (already in .gitignore)
3. Use in code: `process.env.ANTHROPIC_API_KEY`

## Questions?

If you need help with security setup, refer to:
- [Expo Security Best Practices](https://docs.expo.dev/guides/security/)
- [Supabase Security](https://supabase.com/docs/guides/auth)
