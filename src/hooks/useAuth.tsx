import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  role: 'admin' | 'distributor';
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, metadata?: { full_name?: string; role?: string }) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isDistributor: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileLoaded, setProfileLoaded] = useState(false);

  const fetchProfile = async (userId: string) => {
    if (!supabase) return null;
    console.log('[AUTH] Fetching profile for user:', userId);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) {
      console.error('[AUTH] Error fetching profile:', error);
      return null;
    }
    console.log('[AUTH] Profile fetched:', data);
    return data as UserProfile;
  };

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const loadSession = async () => {
      console.log('[AUTH] Loading session...');
      const { data: { session } } = await supabase.auth.getSession();
      console.log('[AUTH] Session retrieved:', session?.user?.id);
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        const profileData = await fetchProfile(session.user.id);
        setProfile(profileData);
        setProfileLoaded(true);
      } else {
        setProfile(null);
        setProfileLoaded(true);
      }
      setLoading(false);
    };

    loadSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('[AUTH] Auth state changed:', event);
        setLoading(true);
        setProfileLoaded(false);
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          setProfile(profileData);
        } else {
          setProfile(null);
        }
        setProfileLoaded(true);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, metadata?: { full_name?: string; role?: string }) => {
    if (!supabase) return { error: new Error('Database not connected') };
    console.log('[AUTH] Signing up:', email);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    });
    console.log('[AUTH] Sign up result:', error ? error.message : 'success');
    return { error: error as Error | null };
  };

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: new Error('Database not connected') };
    console.log('[AUTH] Signing in:', email);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log('[AUTH] Sign in result:', error ? error.message : 'success', 'user:', data.user?.id);
    return { error: error as Error | null };
  };

  const signOut = async () => {
    if (!supabase) return;
    console.log('[AUTH] Signing out');
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
    setProfileLoaded(false);
  };

  const value = {
    user,
    profile,
    session,
    loading: loading || !profileLoaded,
    signUp,
    signIn,
    signOut,
    isAdmin: profile?.role === 'admin',
    isDistributor: profile?.role === 'distributor',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
