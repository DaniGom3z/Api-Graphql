export const notify = async (
    url: string,
    event: string
  ): Promise<void> => {
    try {
      const discordMessage = `Nuevo evento:\n\n${event}`;
  
      const body = {
        content: discordMessage,
        username: "Cliente Servidor", 
      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`Error sending data to Discord webhook: ${response.statusText}`);
      }
  
      console.log(`Data sent to Discord webhook at ${url}`);
    } catch (error) {
      console.error("Error sending data to Discord:", error);
      throw new Error("Error sending data to Discord webhook");
    }
  };