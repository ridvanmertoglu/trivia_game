import axios from 'axios';

const categoryUrl = 'https://opentdb.com/api_category.php';

export const getQuestions = async (choosenCategory, choosenDifficulty) => {
  const result = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${choosenCategory}&difficulty=${choosenDifficulty}&type=multiple`,
  );

  return result;
};

export const getCategories = async () => {
  const result = await axios.get(categoryUrl);

  return result;
};
