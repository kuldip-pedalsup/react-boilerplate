import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <main className={`error_content`}>
                <h1>An error occurred!</h1>
                <p>{error.statusText}</p>
            </main>
        </>
    );
}

export default ErrorPage