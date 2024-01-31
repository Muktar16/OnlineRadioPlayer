const PlatformUrl = import.meta.env.VITE_BASE_URL || "";
export const LanguageEndpoints = {
  getAllLanguage: PlatformUrl + "/languages",
};