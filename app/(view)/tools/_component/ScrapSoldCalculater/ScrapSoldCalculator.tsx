import { Moon, moonPrice } from "@/app/models/moon";
import { Equipment, Upgrade, merchandicePrice } from "@/app/models/store_item";
import { Button, Checkbox, Radio } from "@mui/material";
import { useState } from "react";

type BuyItem = {
  name: Equipment | Upgrade;
  discount: number;
  count: number;
}

// TODO リファクタリング
export const ScrapSoldCalculator = () => {
  const [targetMoney, setTargetMoney] = useState<number>(550);
  const [quotaAmount, setQuotaAmount] = useState<number>(130);
  const [moonSelected, setMoonSelected] = useState<Moon>("Free");
  const [boughtItems, setBoughtItems] = useState<BuyItem[]>([]);

  const moonOptions: Moon[] = ["Free", "Rend", "Dine", "Titan", "Artifice", "Embrion"];

  const renderAbout = () => {
    return (
      <text>
        Calculate scrap sold.
      </text>
    );
  }

  const renderMoonRadio = (moonName: Moon) => {
    const id = "moons-" + moonName;

    return (
      <>
        <Radio
          id={id}
          name='moons-radio'
          checked={moonSelected == moonName}
          onChange={() => { setMoonSelected(moonName) }}
        />
        <label
          htmlFor={id}
        >
          <text>{moonName}({moonPrice(moonName)})</text>
        </label>
      </>
    )
  }

  const updateStoreItem = (targetItem: BuyItem) => {
    if (boughtItems?.some(buyItem => buyItem.name === targetItem.name)) {
      setBoughtItems(
        boughtItems.map(buyItem => buyItem.name === targetItem.name ? targetItem : buyItem)
      );
    } else {
      setBoughtItems([...boughtItems, targetItem]);
    }
  }

  const renderEquipmentTableRow = (equipment: Equipment) => {
    const [equipmentDiscount, setEquipmentDiscount] = useState<number>();
    const [equipmentCount, setEquipmentCount] = useState<number>();

    return (
      <tr>
        <td>
          <label
            htmlFor={equipment}
          >
            <text>{equipment}({merchandicePrice(equipment)})</text>
          </label>
        </td>
        <td>
          <input
            type="number"
            className="input-box padding"
            placeholder="discount"
            value={equipmentDiscount}
            step="10"
            onChange={(discount) => {
              discount ? setEquipmentDiscount(discount.target.valueAsNumber) : setEquipmentDiscount(0);
              updateStoreItem({ name: equipment, discount: discount.target.valueAsNumber, count: equipmentCount ? equipmentCount : 0 });
            }}
          />
        </td>
        <td>
          <input
            type="number"
            className="input-box padding"
            placeholder="pieces"
            value={equipmentCount}
            onChange={(pieces) => {
              pieces ? setEquipmentCount(pieces.target.valueAsNumber) : setEquipmentCount(0);
              updateStoreItem({ name: equipment, discount: equipmentDiscount ? equipmentDiscount : 0, count: pieces.target.valueAsNumber });
            }}
          />
        </td>
      </tr>
    )
  }

  const renderUpgradeCheckbox = (upgrade: Upgrade) => {
    const [upgradeSelected, setUpgradeSelected] = useState<boolean>(false);

    const id = "upgrade-" + upgrade;

    return (
      <span>
        <Checkbox
          id={id}
          checked={upgradeSelected}
          onChange={(select) => {
            setUpgradeSelected(select.target.checked)
            updateStoreItem({ name: upgrade, discount: 0, count: select.target.checked ? 1 : 0 });
          }}
        />
        <label
          htmlFor={id}
        >
          <text>{upgrade}({merchandicePrice(upgrade)})</text>
        </label>
      </span>
    )
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

  /**
   * @return 入力値を元にTarget Moneyを計算する
   */
  const calculateTargetMoney = () => {
    const total = boughtItems.reduce((sum, item) => {
      return sum + Math.floor(merchandicePrice(item.name) * (100 - item.discount) / 100 * item.count)
    }, 0)
    return moonPrice(moonSelected) + total;
  }

  return (
    <view>
      {renderAbout()}
      <div>
        <div style={{ fontSize: 12 }}>Target Money</div>
        <input
          type='number'
          id="target-money"
          className="input-box"
          placeholder="Input Target Money"
          defaultValue={targetMoney}
          value={targetMoney}
          onChange={(event) =>
            setTargetMoney(Number(event.target.value))
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
        Scrap Sold: {calculateScrapSold()}
      </div>
      <div>
        <details>
          <summary>Target Money Helper</summary>
          <div>
            //TODO リファクタリング
            {/* {moonOptions.map((option) => renderMoonRadio(option))} */}
            {renderMoonRadio("Free")}
            {renderMoonRadio("Rend")}
            {renderMoonRadio("Dine")}
            {renderMoonRadio("Titan")}
            {renderMoonRadio("Artifice")}
            {renderMoonRadio("Embrion")}
          </div>
          <div>
            <table>
              {renderEquipmentTableRow("Walkie-talkie")}
              {renderEquipmentTableRow("Flashlight")}
              {renderEquipmentTableRow("Shovel")}
              {renderEquipmentTableRow("Lockpicker")}
              {renderEquipmentTableRow("Pro-flashlight")}
              {renderEquipmentTableRow("Stun_grenade")}
              {renderEquipmentTableRow("Boombox")}
              {renderEquipmentTableRow("TZP-Inhalant")}
              {renderEquipmentTableRow("Zap_gun")}
              {renderEquipmentTableRow("Jetpack")}
              {renderEquipmentTableRow("Extension_ladder")}
              {renderEquipmentTableRow("Radar-booster")}
              {renderEquipmentTableRow("Cruiser")}
            </table>
          </div>
          <div>
            {renderUpgradeCheckbox("Loud_horn")}
            {renderUpgradeCheckbox("Signal_translator")}
            {renderUpgradeCheckbox("Teleporter")}
            {renderUpgradeCheckbox("Inverse_Teleporter")}
          </div>
          <Button
            variant="contained"
            onClick={() => setTargetMoney(calculateTargetMoney())}
          >
            Calculate to Target Money
          </Button>
        </details>
      </div>
    </view>
  );
}