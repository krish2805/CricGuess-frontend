const matchClueToPlayer = async (clues, players) => {
  const response = await fetch("https://cricguess-dg3w.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ clues , players })
  });
  return await response.json();
};
