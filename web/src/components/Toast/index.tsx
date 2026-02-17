import { useEffect, useState } from "react";
import "./style.css";
type ToastProps = {
	message: string;
	onClose: () => void;
	duration?: number;
};

export function Toast({ message, duration = 2000, onClose }: ToastProps) {
	const [exiting, setExiting] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setExiting(true);
		}, duration);

		const remove = setTimeout(() => {
			onClose();
		}, duration + 300);

		return () => {
			clearTimeout(timer);
			clearTimeout(remove);
		};
	}, [duration, onClose]);

	return (
		<div
			className={`
				fixed bottom-4 right-4 z-50
				bg-neutral-900 text-white
				px-4 py-2 rounded-md shadow-lg
				pointer-events-none
				will-change-transform will-change-opacity
				${exiting ? "toast-exit" : "toast-enter"}
			`}
		>
			{message}
		</div>
	);
}

