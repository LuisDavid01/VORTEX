import { ISpinner } from "../../Interfaces/ISpinner";

const Spinner = (props: ISpinner) => {
  if (props.overlay) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          props.bgColor || "bg-black bg-opacity-50"
        } ${props.zIndex || "z-50"}`}
      >
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-12">
            <div
              className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-transparent via-${
                props.spinnerColor || "blue-500"
              } to-transparent animate-spin`}
              style={{
                borderTopColor: props.spinnerColor || "rgb(59, 130, 246)",
              }}
            ></div>
            <div
              className={`absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-transparent via-${
                props.spinnerColor || "blue-500"
              } to-transparent animate-spin`}
              style={{
                borderTopColor: props.spinnerColor || "rgb(59, 130, 246)",
                animationDirection: "reverse",
                animationDuration: "0.75s",
              }}
            ></div>
          </div>
          {props.message && (
            <p className="mt-4 text-gray-700 text-center font-medium">
              {props.message}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-10 h-10">
        <div
          className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-transparent via-${
            props.spinnerColor || "blue-500"
          } to-transparent animate-spin`}
          style={{ borderTopColor: props.spinnerColor || "rgb(59, 130, 246)" }}
        ></div>
        <div
          className={`absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-transparent via-${
            props.spinnerColor || "blue-500"
          } to-transparent animate-spin`}
          style={{
            borderTopColor: props.spinnerColor || "rgb(59, 130, 246)",
            animationDirection: "reverse",
            animationDuration: "0.75s",
          }}
        ></div>
      </div>
      {props.message && (
        <p className="mt-4 text-gray-700 text-center font-medium">
          {props.message}
        </p>
      )}
    </div>
  );
};

export default Spinner;
