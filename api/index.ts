import express from 'express';
import session from 'express-session';
import MemoryStore from 'memorystore';
import passport from '../server/auth';
import { registerRoutes } from '../server/routes';
import { aiProviderManager } from '../server/services/aiProviders';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure session middleware
const MemoryStoreSession = MemoryStore(session);
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  store: new MemoryStoreSession({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize AI provider manager
let initialized = false;
const initializeApp = async () => {
  if (!initialized) {
    await aiProviderManager.initialize();
    await registerRoutes(app);
    initialized = true;
  }
};

// Serverless function handler for Vercel
export default async function handler(req: any, res: any) {
  await initializeApp();
  return app(req, res);
}