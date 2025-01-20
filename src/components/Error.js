import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops Something went Wrong</h2>
      <h2>
        Error{error.status}:{error.statusText}
      </h2>
    </div>
  );
};
export default Error;
