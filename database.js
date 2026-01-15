// database.js
import { supabase } from './supabase-client.js';

export const database = {
    
    // Save booking to Supabase
    async saveBooking(bookingData) {
        try {
            console.log('🔄 Saving booking to Supabase:', bookingData);
            
            // Validate required fields
            if (!bookingData.pickup_location || !bookingData.delivery_location || !bookingData.customer_name) {
                throw new Error('Missing required booking information');
            }
            
            // Insert the booking
            const { data, error } = await supabase
                .from('bookings')
                .insert([bookingData])
                .select();
            
            if (error) {
                console.error('❌ Database insert error:', error);
                throw error;
            }
            
            if (!data || data.length === 0) {
                throw new Error('No data returned from insert');
            }
            
            console.log('✅ Booking saved successfully:', data[0]);
            return { success: true, data: data[0] };
            
        } catch (error) {
            console.error('❌ Error saving booking:', error);
            return { 
                success: false, 
                error: error.message,
                details: error 
            };
        }
    },
    
    // Get all bookings (for debugging)
    async getAllBookings() {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            return { success: true, data };
            
        } catch (error) {
            console.error('❌ Error fetching bookings:', error);
            return { success: false, error };
        }
    },
    
    // Get booking by reference
    async getBookingByReference(reference) {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .eq('booking_reference', reference)
                .single();
            
            if (error) throw error;
            
            return { success: true, data };
            
        } catch (error) {
            console.error('❌ Error fetching booking:', error);
            return { success: false, error };
        }
    },
    
    // Test database connection
    async testConnection() {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('id')
                .limit(1);
            
            if (error) {
                return { 
                    success: false, 
                    error: error.message,
                    code: error.code 
                };
            }
            
            return { 
                success: true, 
                message: 'Database connection successful',
                sampleData: data 
            };
            
        } catch (error) {
            return { 
                success: false, 
                error: error.message 
            };
        }
    }
};