export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placekitten.com/400/400" />
        <meta property="fc:frame:button:1" content="Play 🎮" />
        <meta property="fc:frame:post_url" content="https://google.com" />
      </head>
    </html>
  `);
}
