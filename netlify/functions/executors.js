const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://whatexpsare.online/api/status/exploits', {
      headers: {
        'User-Agent': 'WEAO-3PService', // User-Agent, żeby uniknąć problemów z CORS
      },
    });

    // Jeśli odpowiedź jest ok, konwertujemy ją na JSON
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch executors' }),
    };
  }
};
