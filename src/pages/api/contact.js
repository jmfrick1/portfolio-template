const handleContact = async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Here, integrate with your backend or third-party service
      // Example: Send email using a service like SendGrid or save to a database
  
      // For demonstration, we'll just log the data
      console.log('Received message:', { name, email, message });
  
      res.status(200).json({ message: 'Message received successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  
  export default handleContact;
  