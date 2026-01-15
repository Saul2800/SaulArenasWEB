/**
 * Configuration file for the application.
 * Contains API keys and other environment specific settings.
 */
export const CONFIG = {
  // Access the API Key from the process.env polyfill in index.html
  API_KEY: process.env.API_KEY,
};