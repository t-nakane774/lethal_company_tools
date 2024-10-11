import { useMemo, useState } from "react";
import './styles/OvertimeBonusCalculator.css'

const renderCalculateOvertimeBonus = (scrapSold: number, quotaAmount: number) => {
  const overtimeBonus = useMemo(() => {
    if (quotaAmount >= scrapSold) return 0;
    const result = Math.floor((scrapSold - quotaAmount) / 5 - 15);
    return result < 0 ? 0 : result;
  }, [scrapSold, quotaAmount]);

  return (
    <>
      <div> Overtime Bonus: {overtimeBonus} </div>
      <div> Bonus + Scrap: {scrapSold + overtimeBonus} </div>
    </>
  );
}

const renderAbout = () => {
  return (
    <text>
      Calculate overtime bonus.
    </text>
  );
}

export const OvertimeBonusCalculator = () => {
  const [scrapSold, setScrapSold] = useState<number>();
  const [quotaAmount, setQuotaAmount] = useState<number>(130);

  return (
    <view>
      {renderAbout()}
      <div>
        <div className="input-box-title">Scrap Sold</div>
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
        <div className="input-box-title">Quota Amount</div>
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
      {renderCalculateOvertimeBonus(!scrapSold ? 0 : scrapSold, quotaAmount)}
    </view>
  );
}