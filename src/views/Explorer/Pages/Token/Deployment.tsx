import "./Deployment.scss";
import icon2 from "../../../../assets/token/deployment-icon2.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { setStep } from "../../../../store/deploymentSlice";
import UploadContract from "./UploadContract";
import NoCodeDeployment from "./NoCodeDeployment";

interface DeploymentProps {
  handleResetList?: () => void;
}
const Deployment = (props: DeploymentProps) => {
  const dispatch = useDispatch();

  const step = useSelector((state: RootState) => state.deploymentStore.step);
  const handleToStep = (n: number) => {
    dispatch(setStep(n));
    props.handleResetList && props.handleResetList();
  };
  return (
    <div className="w-100% h-90% px-20px py-12px deployment-panel">
      {step === 1 && (
        <div className=" flex gap-20px h-100%">
          {/* <div className="de-card">
            <div>
              <div className="flex justify-start">
                <img src={icon1} alt="" />
              </div>
              <div className="font-size-16px text-left mt-14px mb-14px">
                Uploading Contract Code for Deployment
              </div>
              <div className="font-size-12px text-left color-#ddd">
                Uploading contract code for deployment is suitable for users or
                developmentteams with programming skills. This method allows
                users to write custom smartcontract code and upload it to the
                blockchain platform for deployment.
              </div>
            </div>
            <div className="dp-btn" onClick={() => handleToStep(2)}>
              Enter Upload
            </div>
          </div> */}
          <div className="de-card">
            <div>
              <div>
                <div className="flex justify-center items-center">
                  <img src={icon2} alt="" />
                </div>
                <div className="font-size-20px text-center mt-14px mb-14px">
                  No-Code Contract Deployment
                </div>
                <div className="font-size-14px text-center color-#ddd">
                  No-code smart contract deployment is designed for users
                  without programming skills. There's no need for coding; users
                  can simply fill out a form to generate and deploy smart
                  contracts.
                </div>
              </div>
              <div className="dp-btn mt-6vh" onClick={() => handleToStep(3)}>
                Start Edit
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && <UploadContract />}
      {step === 3 && <NoCodeDeployment />}
    </div>
  );
};

export default Deployment;
