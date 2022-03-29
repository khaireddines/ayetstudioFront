export const BASE_URL = 'http://localhost:8000/api';

export const GET_AUTH_TOKENS = `${BASE_URL}/oauth/token`;
export const CREATE_USER = `${BASE_URL}/CreateUser`;
export const MODIFY_API = `${BASE_URL}/ModifyApiKey`;
export const ACCOUNT_DETAILS = `${BASE_URL}/Account/GetAccountDetails`;
export const ACCOUNT_RATES = `${BASE_URL}/Account/GetRates`;
export const ACCOUNT_TRACKING_PROVIDER = `${BASE_URL}/Account/GetTrackingProviders`;
export const CAMPAIGN_LIST = `${BASE_URL}/Campaign/GetCampaignsList`;
export const GET_A_CAMPAIGN = `${BASE_URL}/Campaign/GetACampaign`;
export const START_A_CAMPAIGN = `${BASE_URL}/Campaign/StartACampaign`;
export const PAUSE_A_CAMPAIGN = `${BASE_URL}/Campaign/PauseACampaign`;
export const GET_CAMPAIGN_SUMMARY = `${BASE_URL}/Campaign/GetSummary`;
export const GET_CAMPAIGN_DAILY_SUMMARY = `${BASE_URL}/Reporting/GetSummaryDaily`;
export const GET_INSTALLATION_REPORTING = `${BASE_URL}/Reporting/GetInstallations`;
export const GET_REPORTING_STATS = `${BASE_URL}/Reporting/GetStats`;
export const GET_TRAFFIC_ANALYSIS_REPORTING = `${BASE_URL}/Reporting/GetTrafficAnalysis`;
