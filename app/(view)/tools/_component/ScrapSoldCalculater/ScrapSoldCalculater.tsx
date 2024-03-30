import { useState } from "react";

interface props {
  scrapSold2: number;
  quotaAmount2: number;
}

export default function ScrapSoldCalculater() {
  const [targetMoney, setTargetMoney] = useState<number>();
  const [quotaAmount, setQuotaAmount] = useState<number>();

  const renderAbout = () => {
    return (
      <text>
        Calculate scrap sold.
      </text>
    );
  }

  /**
   * @returns TargetMoneyを元にScrap Soldを計算する
   */
  const calculateScrapSold = () => {
    if (!targetMoney) return;
    if (!quotaAmount) return;

    const result = (targetMoney * 5 + 75 + quotaAmount) / 6;

    return result > targetMoney ? targetMoney : result;
  }

  return (
    <view>
      {renderAbout()}
      <div>
        <div style={{ fontSize: 12 }}>Target Money</div>
        <input
          type='number'
          id="scrap-sold"
          className="input-box"
          placeholder="Input Target Money"
          onChange={(event) =>
            setTargetMoney(Number(event.target.value))

          }
        />
      </div>
      <div>
        <div style={{ fontSize: 12 }}>Quota Amount</div>
        <input
          type='number'
          id="scrap-sold"
          className="input-box"
          placeholder="Input Quota Amount"
          onChange={(event) =>
            setQuotaAmount(Number(event.target.value))
          }
        />
      </div>
      <div>
        Scrap Sold: {calculateScrapSold()}
      </div>
    </view>
  );
}