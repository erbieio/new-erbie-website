export default function CSBTCard() {
  return (
    <div className="card-list flex flex-col gap-2vh">
      <div className="card-box">
        <div className="color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh">
          Block Details # 128088
        </div>
        <div className="staked-card">
          <div>Block Generation Time</div>
          <div>5 Min Ago</div>
        </div>
        <div className="staked-card">
          <div>Block Size</div>
          <div>2011 Bytes</div>
        </div>
        <div className="staked-card">
          <div>Gas Used</div>
          <div>0(0%)</div>
        </div>
        <div className="staked-card">
          <div>Gas Price</div>
          <div>0 Gwei</div>
        </div>
        <div className="staked-card">
          <div>Gas Limit</div>
          <div>8000000</div>
        </div>
        <div className="staked-card">
          <div>Parent Hash</div>
          <div>
            <span className="link color-blue">0x...95a271f3f3998e</span>
          </div>
        </div>
      </div>
      <div className="card-box">
        <div className="color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh">
        Punishment Details
        </div>
        <table
          className="font-size-12px csbt-table w-100%"
          cellPadding={0}
          cellSpacing={0}
        >
          <thead className="color-#80838E">
            <th>Address</th>
            <th>Sum</th>
            <th>Type</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="link color-blue">Oxe...645</span>
              </td>
              <td>20</td>
              <td>Muti-sign..</td>
              <td>^</td>
            </tr>
            <tr>
              <td>
                <span className="link color-blue">Oxe...645</span>
              </td>
              <td>20</td>
              <td>
              <span className="link color-blue">Oxe...645</span>
              </td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                <span className="link color-blue">Oxe...645</span>
              </td>
              <td>20</td>
              <td>  <span className="link color-blue">Oxe...645</span></td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                <span className="link color-blue">Oxe...645</span>
              </td>
              <td>20</td>
              <td>
              <span className="link color-blue">Oxe...645</span>
              </td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                <span className="link color-blue">Oxe...645</span>
              </td>
              <td>20</td>
              <td>
              <span className="link color-blue">Oxe...645</span>
              </td>
              <td>4000</td>
            </tr>
            <tr>
              <td>
                <span className="link color-blue">Oxe...645</span>
              </td>
              <td>20</td>
              <td>Muti-sign..</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-box font-size-12px">
      <div className="color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh">
        Node Address
        </div>
        <div className="line"></div>
        <div className="csbt-card">
        <span className="link color-blue">Oxdb33..55d05</span>
        <span className="link color-blue ml-20px">Oxdb33..55d05</span>
        </div>
        <div className="csbt-card">
        <span className="link color-blue">Oxdb33..55d05</span>
        <span className="link color-blue ml-20px">Oxdb33..55d05</span>
        </div>
        <div className="csbt-card">
        <span className="link color-blue">Oxdb33..55d05</span>
        <span className="link color-blue ml-20px">Oxdb33..55d05</span>
        </div>
        <div className="csbt-card">
        <span className="link color-blue">Oxdb33..55d05</span>
        <span className="link color-blue ml-20px">Oxdb33..55d05</span>
        </div>
        <div className="csbt-card">
        <span className="link color-blue">Oxdb33..55d05</span>
        <span className="link color-blue ml-20px">Oxdb33..55d05</span>
        </div>
      </div>
    </div>
  )
}
