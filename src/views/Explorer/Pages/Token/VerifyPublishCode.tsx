import './VerifyPublishCode.scss'
const VerifyPublishCode = () => {
    return (
      <div className="verify-contract h-100% w-100%">
        <div className="text-left lh-5vh px-20px border-b-solid border-b-1px border-b-#333">
          Verify & Publish Contract Source Code
        </div>
        <div className="text-left font-size-12px px-20px mt-2vh">
          Soure code verification provides complete transparency for user
          interaction with smartcontracts.By uploading the source code, the DO
          Network xplorer wll match the compileccode withthe code on the
          blockchain. imlar to contacts, smar contracts should provide detaled
          information about their dioital sianaturesto end user and alow
          userstheopportunity to review the code independently to verify whether
          it indeed performs the expected operations.
        </div>
        <div className="px-20px mt-4vh">
          <div className="flex flex-col justify-start deployment-form">
            <div className="flex justify-between gap-14px">
              <div className="flex-1">
                <div className="text-left label">Contract Address</div>
                <div>
                  <input placeholder="Enter" type="text" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-left label">Contract Language</div>
                <div>
                  <input placeholder="Enter" type="text" />
                </div>
              </div>
            </div>
            <div className="flex gap-14px mt-2vh">
              <div className="flex-1">
                <div className="text-left label">Contract Version</div>
                <div>
                  <input placeholder="Enter" type="text" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-left label">License</div>
                <div>
                  <input placeholder="Enter" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between flex gap-20px mt-4vh">
            <div className="dp-btn flex-1">Reset</div>
            <div className="dp-btn flex-1">Continue</div>
          </div>
        </div>
      </div>
    );
}

export default VerifyPublishCode;
