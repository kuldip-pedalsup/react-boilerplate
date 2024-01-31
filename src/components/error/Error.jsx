import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <main id={`errorContent`}>
                <h1>An error occurred!</h1>
                <p>{error.statusText}</p>
            </main>
        </>
    );
}

export default ErrorPage