import { useRouteError } from "react-router-dom";

type RouterError = { statusText: string, message: string, status: number }

export default function Error()
{
	const error  = useRouteError() as RouterError;
	console.error(error);

	return (
		<>
			<h1>Oops !</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.status} | {error.statusText || error.message}</i>
			</p>
		</>
	)
}