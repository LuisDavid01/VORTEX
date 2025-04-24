import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//se importan las interfaces
import IReCaptchaData from './interfaces/IReCaptchaData';
import IReCaptchaResponse from './interfaces/IReCaptchaResponse';
dotenv.config();

const app = express();

app.use(cors({
	origin: '*'
}));
app.use(express.json());
//endpoints
app.post('/verificarReCaptcha', async (req, res) => {
	const { response } = req.body;

	if (!response) return res.status(400).json({success: false, error: 'token requerido'});
	const data: IReCaptchaData = {
		secret: process.env.private_key || '',
		response

	};

});

const PORT = process.env.PORT || 8971;
app.listen(PORT, ()=> console.log('El servidor esta corriendo!'));
