import { getDefaultProvider, isAddress, formatEther } from "ethers";

const provider = getDefaultProvider("mainnet");

export function initApp() {
  const walletInput = document.getElementById(
    "wallet__address"
  ) as HTMLInputElement;
  const balanceDisplay = document.getElementById(
    "balance"
  ) as HTMLParagraphElement;
  const transactionsDisplay = document.getElementById(
    "transactions"
  ) as HTMLDivElement;
  const checkBalanceButton = document.getElementById(
    "check__balance"
  ) as HTMLButtonElement;
  const checkTransactionsButton = document.getElementById(
    "check__transactions"
  ) as HTMLButtonElement;

}
