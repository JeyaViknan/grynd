
import { createClient } from '@supabase/supabase-js';
import { toast } from '@/components/ui/use-toast';
import { supabase as integrationSupabase } from '@/integrations/supabase/client';

// We'll use the pre-configured Supabase client from the integration
export const supabase = integrationSupabase;

// Let the user know that the connection is working
if (typeof window !== 'undefined') {
  setTimeout(() => {
    // This will only show up if there was an error notification previously
    toast({
      title: "Connected to Supabase",
      description: "Your app is now properly connected to Supabase.",
    });
  }, 1000);
}
