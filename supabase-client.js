// supabase-client.js
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from './config.js';

// Create and export the Supabase client
const supabaseUrl = SUPABASE_CONFIG.URL;
const supabaseAnonKey = SUPABASE_CONFIG.ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection function
export async function testConnection() {
    try {
        console.log('Testing Supabase connection...');
        
        // Test 1: Check if we can reach Supabase
        const { data, error } = await supabase
            .from('bookings')
            .select('count')
            .limit(1);
        
        if (error) {
            console.error('❌ Supabase connection error:', error);
            
            // Provide specific troubleshooting based on error
            if (error.code === '42P01') {
                console.error('Table "bookings" does not exist. Please create it in Supabase.');
            } else if (error.code === '42501') {
                console.error('RLS policy issue. Please check your table policies.');
            } else if (error.message.includes('JWT')) {
                console.error('Authentication issue. Check your anon key.');
            }
            
            return { success: false, error };
        }
        
        console.log('✅ Supabase connection successful!');
        return { success: true, data };
        
    } catch (error) {
        console.error('❌ Connection test failed:', error);
        return { success: false, error };
    }
}