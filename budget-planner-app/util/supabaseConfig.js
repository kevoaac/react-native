import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wqagqnmjiokwoiqgjzvh.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxYWdxbm1qaW9rd29pcWdqenZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzMzUyMTgsImV4cCI6MjAyNjkxMTIxOH0.6vSv_AXRy0zIESJRTX12x5KDF-ei6lH15I2KoFA9Tco";

// Create a single supabase client for interacting with your database
export const supabase = createClient(PROJECT_URL, API_KEY);
