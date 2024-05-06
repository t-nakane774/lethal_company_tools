import { useState } from "react";

export default function OvertimeBonusCalculator() {

  const [overtimeBonus, setOvertimeBonus] = useState<number>();
  const [scrapSold, setScrapSold] = useState<number>();
  const [quotaAmount, setQuotaAmount] = useState<number>(130);

  const renderAbout = () => {
    return (
      <text>
        Calculate overtime bonus.
      </text>
    );
  }

  //小数点以下切り捨て
  const calculateOvertimeBonus = () => {
    if (!scrapSold) return 0;
    if (!quotaAmount) return 0;

    return Math.floor((scrapSold - quotaAmount) / 5 - 15);
  }

  const calculateTotal = () => {
    if (!scrapSold) return;

    return scrapSold + calculateOvertimeBonus();
  }

  return (
    <view>
      {renderAbout()}
      <div>
        <div style={{ fontSize: 12 }}>Scrap Sold</div>
        <input
          type='number'
          id="scrap-sold"
          className="input-box"
          placeholder="Input Scrap Sold"
          onChange={(event) =>
            setScrapSold(Number(event.target.value))
          }
        />
      </div>
      <div>
        <div style={{ fontSize: 12 }}>Quota Amount</div>
        <input
          type='number'
          id="quota-amount"
          className="input-box"
          placeholder="Input Quota Amount"
          defaultValue={quotaAmount}
          onChange={(event) =>
            setQuotaAmount(Number(event.target.value))
          }
        />
      </div>
      <div>
        Overtime Bonus: {calculateOvertimeBonus()}
        Bonus + Scrap: {calculateTotal()}
      </div>
    </view>
  );
}