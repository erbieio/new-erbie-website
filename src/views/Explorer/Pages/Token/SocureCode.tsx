import code from '../../../../assets/token/code.svg'
import Copy from '../../../../components/Copy';
import NoData from '../../../../components/NoData';
import './SourceCode.scss'
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  paraisoDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs"; 
interface SourceCodeProps {
  code: string
}
const SourceCode = (props: SourceCodeProps) => {
//   const str = `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.19;

// import "./IERC20.sol";

// contract ERC20 is IERC20 {
//     event Transfer(address indexed from, address indexed to, uint256 value);
//     event Approval(
//         address indexed owner, address indexed spender, uint256 value
//     );
//     uint256 public totalSupply;
//     mapping(address => uint256) public balanceOf;
//     mapping(address => mapping(address => uint256)) public allowance;
//     string public name;
//     string public symbol;
//     uint8 public decimals;
//     constructor(string memory _name, string memory _symbol, uint8 _decimals) {name = _name;symbol = _symbol;
//         decimals = _decimals;
//     }
//     function transfer(address recipient, uint256 amount)
//         external
//         returns (bool)
//     {
//         balanceOf[msg.sender] -= amount;
//         balanceOf[recipient] += amount;
//         emit Transfer(msg.sender, recipient, amount);
//         return true;
//     }

//     function approve(address spender, uint256 amount) external returns (bool) {
//         allowance[msg.sender][spender] = amount;
//         emit Approval(msg.sender, spender, amount);
//         return true;
//     }

//     function transferFrom(address sender, address recipient, uint256 amount)
//         external
//         returns (bool)
//     {
//         allowance[sender][msg.sender] -= amount;
//         balanceOf[sender] -= amount;
//         balanceOf[recipient] += amount;
//         emit Transfer(sender, recipient, amount);
//         return true;
//     }

//     function _mint(address to, uint256 amount) internal {
//         balanceOf[to] += amount;
//         totalSupply += amount;
//         emit Transfer(address(0), to, amount);
//     }

//     function _burn(address from, uint256 amount) internal {
//         balanceOf[from] -= amount;
//         totalSupply -= amount;
//         emit Transfer(from, address(0), amount);
//     }

//     function mint(address to, uint256 amount) external {
//         _mint(to, amount);
//     }

//     function burn(address from, uint256 amount) external {
//         _burn(from, amount);
//     }
// }
// `;
  return (
    <div className="source-code text-left bg-#191123 p-20px w-100% h-100%">
      <div className="font-size-12px lg:flex lg:items-center">
        <img src={code} className="h-14px lg:h-20px" alt="" /> Contract source
        code is unverified.l am the creator of the contract,
        <span className="color-blue">Verify and launch source code</span>
      </div>
      <div className="flex justify-between mt-20px">
        <div className="font-size-14px lh-24px lg:font-size-16px">
          Contract source code (solidity)
        </div>
        {props.code && (
          <Copy text={props.code}>
            <div className="hidden lg:flex px-20px border-1px border-solid border-white font-size-14px color-#2C283F color-white cursor-pointer select-none lh-24px lg:lh-20px">
              Copy
            </div>
          </Copy>
        )}
      </div>
      <div className="h-49vh overflow-y-scroll scrollbar-y mt-2vh bg-#261C32 code-box">
        {props.code ? (
          <SyntaxHighlighter style={paraisoDark} language="solidity">
            {props.code}
          </SyntaxHighlighter>
        ) : (
          <div className="h-100% flex items-center">
            <NoData text="Contract Verification in Progress"/>
          </div>
        )}
      </div>
      <Copy text="123123">
        <div className="flex justify-center lg:hidden px-20px border-1px border-solid border-white font-size-14px color-#2C283F color-white cursor-pointer select-none lh-36px mt-20px">
          Copy
        </div>
      </Copy>
    </div>
  );
};

export default SourceCode;
