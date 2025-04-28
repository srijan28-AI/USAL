export default async function handler(req, res) {
  // Replace with your YouTube Data API key and channel ID
  const API_KEY = 'AIzaSyD1jqoT_IBDe2jjgLSxhK9OkOdYxPVbv1Q';
  const CHANNEL_ID = 'UClDYnqtEinrFgvpGvh6roTg';
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const followers = data.items[0].statistics.subscriberCount;
    res.status(200).json({ followers });
  } else {
    res.status(500).json({ error: 'Unable to fetch YouTube followers' });
  }
}