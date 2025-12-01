export type LangType = "ja" | "hi" | "es" | "fr";

export type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

export type StateType = {
  loading: boolean;
  result: string[];
  words: WordType[];
  error?: string;
};
