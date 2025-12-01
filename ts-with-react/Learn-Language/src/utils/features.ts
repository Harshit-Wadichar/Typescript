import axios from "axios";
import { generate } from "random-words";
import type { LangType } from "../types/types";

export const translateWords = async (langParams: LangType) => {
  try {
    const randomWords = generate(8);

    const words: string[] = Array.isArray(randomWords) ? randomWords : [randomWords];
    const body = words.map(w => ({ Text: w }));

    const options = {
  method: 'POST',
  url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
  params: {
    'to': langParams,
    'api-version': '3.0',
    profanityAction: 'NoAction',
    textType: 'plain'
  },
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: body
};
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.log(error);
    throw new Error("Error Occured");
  }
};
