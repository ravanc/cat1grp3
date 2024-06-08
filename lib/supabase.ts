import { AppState } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qepnnuejstzzizrnpyns.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlcG5udWVqc3R6eml6cm5weW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3NzAzMzUsImV4cCI6MjAzMzM0NjMzNX0.2x20vDxkZlY8BFh_0YApsIIhTZZ7DuKn0nZ-krGTXik"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

export const getCurrentUser = async () => {
    try {
        const currentAccount = await supabase.auth.getUser();
        if (!currentAccount) throw Error;
    } catch (error) {
        console.log(error);
    }
}

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })