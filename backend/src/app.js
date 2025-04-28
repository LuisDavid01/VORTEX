const express = require('express');
const  cors = require('cors');
const dotenv = require( 'dotenv');
dotenv.config();


const app = express();
const allowedOrigins = [
  'http://localhost:5173/',
  'https://vortex-cr.vercel.app',
  'vortexsecurity.vercel.app'
];
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());


app.post('/VerifyReCaptcha', async (req , res ) => {
    const { response } = req.body;
    
    if(!response) return res.status(400).json({success: false, error: 'profavor llene el captcha'});

    const params = {
        "secret": process.env.Secret_ReCaptcha,
        "response": response,

    };

    let encodedParams = new URLSearchParams(params).toString();

    const tokenVerified = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedParams,
      });
      
      if (!tokenVerified.ok) {
        return res.status(500).json({ success: false, error: 'error del servidor' });
      }
  
      const result = await tokenVerified.json();
      
      if (result != null){
        
          if(result.success != null && result.success == true) return res.status(200).json(result);
          return res.status(400).json(result);

      } 
      return res.status(400).json({ success: false, error: 'Token inválido' });



});

const PORT = process.env.PORT || 8971;
app.listen(PORT, () => console.log(`El servidor está corriendo en el puerto ${PORT}`));