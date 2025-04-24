import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());


app.post('/VerifyReCaptcha', async (req , res ) => {
    const { response } = req.body;
    if(!response) return res.status(400).json({success: false, error: 'profavor llene el captcha'});

    const params = {
        secret: process.env.Secret_ReCaptcha,
        response: response.response,

    };

    const tokenVerified = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(params).toString(),
      });
      if (!tokenVerified.ok) {
        return res.status(401).json({ success: false, error: 'Token inválido' });
      }
  
      const result = await tokenVerified.json();
      return res.status(200).json(result);



});

const PORT = process.env.PORT || 8971;
app.listen(PORT, () => console.log(`El servidor está corriendo en el puerto ${PORT}`));