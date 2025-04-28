
const reCaptcha = () => {
//llamada al api para verificar el reCaptcha
	const verifyReCaptcha = async (data: any) => {
		try{
			const response = await fetch('https://www.google.com/recaptcha/api/siteverify',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}); 
			if(!response.ok){
				throw new Error('Error: ' + response.status)
			}
			return await response.json();
		}catch(error){
			console.error('Error al verificar el ReCaptcha')
			throw error;
		
		}
	}


}

export default reCaptcha;
