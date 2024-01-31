import LanguageApi from "../apis/languageApi";

const getAllLanguage = async (searchParams: any) => {
  const response = await LanguageApi().getAllLanguage(searchParams);
  return response.data;
};

export function LanguageServices() {
  return {
    getAllLanguage,
  };
}
