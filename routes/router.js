const express=require('express');
const axios = require('axios');
const router=express.Router();

const createTheWish=()=>{
    console.log("in");
    const userParams = 'for a successful project';
    createWish(userParams)
      .then((result) => {
        console.log('Generated Wish:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
async function createWish(params) {
    const apiKey = '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';
  
    const prompt = `Create a wish: ${params}`;
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions', // Use text-davinci-003 instead of davinci-codex
        {
          prompt,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
  
      const wish = response.data.choices[0].text.trim();
      return wish;
    } catch (error) {
      console.error('Error creating wish:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
router.get('/generate',createTheWish)
// Example usage:


module.exports = router;


