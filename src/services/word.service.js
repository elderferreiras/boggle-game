import axios from 'axios';

export const isValidWord = async (word) => {
  try {
    const response = await axios.post("https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary", {
      word: word.toLowerCase()
    });

    if (response.data && response.data.valid) {
      return response.data.valid;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error('Could not reach API.');
  }
};
