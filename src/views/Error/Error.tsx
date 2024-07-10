import { useEffect } from "react";
import "./Error.scss";
import { useNavigate, useRouteError } from "react-router-dom";
import { Modal, Button } from "antd";
export default function Error() {
  const [modal, contextHolder] = Modal.useModal();
  const navigator = useNavigate();
  const error = useRouteError() as unknown as {
    code?: string;
    message?: string;
    stack?: string;
    status?: number;
  };
  const handleClick = () => {
    navigator("/", { replace: true });
  };
  const versionUploadStr = "Failed to fetch dynamically imported module";

  useEffect(() => {
    if (error) {
      if (
        error?.message?.includes(versionUploadStr) ||
        error?.stack?.includes(versionUploadStr)
      ) {
        modal.confirm({
          title: "Confirm",
          content:
            "There is an update in the current version, please refresh and try again",
          footer: (
            <div className="flex justify-center items-center mt-14px">
              <Button onClick={() => location.reload()}>Confirm</Button>
            </div>
          ),
        });
      }
    }
  }, [error, modal]);
  return (
    <div className="w-100vw h-100vh flex items-center justify-center page-error">
      {contextHolder}
      <div className="max-w-800px m-auto">
        {(error.code && Number(error.code) === 404) ||
        (error.status && error.status === 404) ? (
          <div className="font-size-150px font-bold h-130px flex justify-center">
            <i className="i-tabler-error-404 color-#dedcdc"></i>
          </div>
        ) : (
          <></>
        )}
        <div className="font-size-14px text-center color-gray mb-20px">
          {error.code && Number(error.code) === 404 ? "Page Not Found" : ""}
        </div>
        {error.message ? (
          <div className="font-size-12px mb-10px">{error.message}</div>
        ) : (
          <></>
        )}
        {error.stack ? <code>{error.stack}</code> : <></>}
        <div className="mt-20px flex justify-center items-center">
          <div className="lh-40px back-home-btn" onClick={handleClick}>
            Back to the home page
          </div>
        </div>
      </div>
    </div>
  );
}
