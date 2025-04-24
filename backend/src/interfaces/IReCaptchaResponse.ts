export default interface ReCaptchaResponse{
	success: boolean;
	challenge_ts?: string;
	hostname?: string;
	'error-codes'?: string[];

}
