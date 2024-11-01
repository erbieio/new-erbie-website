import icon from '../../../../assets/token/deployment-icon1.svg'
import './UploadContract.scss'
const UploadContract = () => {
    return (
      <div className='h-90% upload-panel'>
        <div className="font-size-12px text-left h-7vh">
          Contract deploymentis a crucial step in sucessfuly deplowng
          smartcontract code to a blckchain network. Bv uploadina the smart
          contact e, you can easily compile and deploythesmart contract. Pleae
          note that contract deployment wilconsume a certain amount of DO
          tokens,so ensure that your account balance is suficient to complete
          this operation
        </div>
        <div className="upload-card mt-20px">
          <div className="flex items-center justify-center h-100%">
            <div>
              <div className="flex items-center justify-center">
                <img src={icon} alt="" />
              </div>
              <div className="text-center mt-10px">
                Upload contract file in here
              </div>
              <div className="dp-btn mt-40px">Upload File</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UploadContract;
