import code from '../../../../assets/token/code.svg'
import Copy from '../../../../components/Copy';
const SourceCode = () => {
    const str = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner, address indexed spender, uint256 value
    );

    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    string public name;
    string public symbol;
    uint8 public decimals;

    constructor(string memory _name, string memory _symbol, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }

    function transfer(address recipient, uint256 amount)
        external
        returns (bool)
    {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount)
        external
        returns (bool)
    {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function _mint(address to, uint256 amount) internal {
        balanceOf[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }

    function _burn(address from, uint256 amount) internal {
        balanceOf[from] -= amount;
        totalSupply -= amount;
        emit Transfer(from, address(0), amount);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external {
        _burn(from, amount);
    }
}
`;
    return (
      <div className="source-code text-left bg-#191123 p-20px">
        <div className="font-size-12px flex items-start">
          <img src={code} className="h-20px" alt="" /> Contract source code is
          unverified.l am the creator of the contract,
          <span className="color-blue">Verify and launch source code</span>
        </div>
        <div className="flex justify-between mt-20px">
          <div>Contract source code (solidity)</div>
          <Copy text="123123">
            <div className="px-20px border-1px border-solid border-white font-size-14px color-#2C283F color-white cursor-pointer select-none">
              Copy
            </div>
          </Copy>
        </div>
        <div className="h-49vh overflow-y-scroll scrollbar-y mt-2vh bg-#261C32">
          <pre className="pre color-#888 p-14px">{str}</pre>
        </div>
      </div>
    );
}

export default SourceCode;
