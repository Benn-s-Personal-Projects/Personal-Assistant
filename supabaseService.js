import { createClient } from '@supabase/supabase-js';
import { ENV } from './config';
import 'react-native-url-polyfill/auto';

// Initialize Supabase client
export const supabase = createClient(
  ENV.SUPABASE_URL,
  ENV.SUPABASE_ANON_KEY
);

// Helper function to get utility bills
export async function getUtilityBills(limit = 10) {
  const { data, error } = await supabase
    .from('utility_bills')
    .select('*')
    .order('billing_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data;
}

// Helper function to get transactions
export async function getTransactions(limit = 20) {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('transaction_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data;
}

// Helper function to get tasks
export async function getTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Helper function to get notes
export async function getNotes(limit = 20) {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data;
}

// Helper function to get contacts
export async function getContacts() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('first_name', { ascending: true });
  
  if (error) throw error;
  return data;
}

// Helper function to get property info
export async function getProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*');
  
  if (error) throw error;
  return data;
}

// Helper function to get insurance policies
export async function getInsurancePolicies() {
  const { data, error } = await supabase
    .from('insurance_policies')
    .select('*');
  
  if (error) throw error;
  return data;
}

// Generic query function for custom queries
export async function querySupabase(query) {
  try {
    // This is a simplified version - in production you'd want more sophisticated query parsing
    const { data, error } = await supabase.rpc('execute_query', { query_text: query });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Supabase query error:', error);
    return null;
  }
}
