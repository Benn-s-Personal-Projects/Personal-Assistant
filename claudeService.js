import { ENV } from './config';

/**
 * Send a message to Claude AI with context from Supabase
 */
export async function askClaude(userMessage, context = {}) {
  try {
    // Build the system prompt with context
    let systemPrompt = `You are a helpful personal assistant with access to the user's personal data. 
You can help with questions about their finances, tasks, notes, contacts, property, insurance, and utility bills.

The user's name is B Lombard and they live in Claremont, Cape Town, South Africa.`;

    // Add context to the system prompt if available
    if (context.utilityBills && context.utilityBills.length > 0) {
      systemPrompt += `\n\nRecent Utility Bills:\n${JSON.stringify(context.utilityBills, null, 2)}`;
    }
    if (context.transactions && context.transactions.length > 0) {
      systemPrompt += `\n\nRecent Transactions:\n${JSON.stringify(context.transactions.slice(0, 10), null, 2)}`;
    }
    if (context.tasks && context.tasks.length > 0) {
      systemPrompt += `\n\nCurrent Tasks:\n${JSON.stringify(context.tasks, null, 2)}`;
    }
    if (context.properties && context.properties.length > 0) {
      systemPrompt += `\n\nProperty Information:\n${JSON.stringify(context.properties, null, 2)}`;
    }
    if (context.insurancePolicies && context.insurancePolicies.length > 0) {
      systemPrompt += `\n\nInsurance Policies:\n${JSON.stringify(context.insurancePolicies, null, 2)}`;
    }

    // Make request to Claude API
    const response = await fetch(ENV.ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ENV.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: ENV.CLAUDE_MODEL,
        max_tokens: 2048,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Claude API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    
    // Extract the text response
    if (data.content && data.content.length > 0) {
      return data.content[0].text;
    }
    
    return 'I apologize, but I received an empty response. Please try again.';
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw error;
  }
}

/**
 * Analyze user query to determine what context to fetch
 */
export function analyzeQuery(query) {
  const lowerQuery = query.toLowerCase();
  
  const context = {
    needsUtilityBills: false,
    needsTransactions: false,
    needsTasks: false,
    needsNotes: false,
    needsContacts: false,
    needsProperties: false,
    needsInsurance: false,
  };

  // Utility bills keywords
  if (lowerQuery.includes('utility') || lowerQuery.includes('bill') || 
      lowerQuery.includes('water') || lowerQuery.includes('electricity') || 
      lowerQuery.includes('rates') || lowerQuery.includes('sewerage') ||
      lowerQuery.includes('refuse')) {
    context.needsUtilityBills = true;
  }

  // Transactions/finance keywords
  if (lowerQuery.includes('transaction') || lowerQuery.includes('spending') || 
      lowerQuery.includes('expense') || lowerQuery.includes('income') ||
      lowerQuery.includes('money') || lowerQuery.includes('paid') ||
      lowerQuery.includes('budget')) {
    context.needsTransactions = true;
  }

  // Tasks keywords
  if (lowerQuery.includes('task') || lowerQuery.includes('todo') || 
      lowerQuery.includes('do i need') || lowerQuery.includes('what should i')) {
    context.needsTasks = true;
  }

  // Property keywords
  if (lowerQuery.includes('property') || lowerQuery.includes('house') || 
      lowerQuery.includes('home') || lowerQuery.includes('erf')) {
    context.needsProperties = true;
  }

  // Insurance keywords
  if (lowerQuery.includes('insurance') || lowerQuery.includes('policy') || 
      lowerQuery.includes('premium') || lowerQuery.includes('cover')) {
    context.needsInsurance = true;
  }

  // Default: if no specific context detected, load recent data
  const hasSpecificContext = Object.values(context).some(v => v);
  if (!hasSpecificContext) {
    context.needsUtilityBills = true;
    context.needsTransactions = true;
    context.needsTasks = true;
  }

  return context;
}
