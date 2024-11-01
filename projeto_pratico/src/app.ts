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

  checkBalanceButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!isAddress(address)) {
      balanceDisplay.textContent = "Endereço inválido!";
      return;
    }
    try {
      const balance = await provider.getBalance(address);
      balanceDisplay.textContent = `Saldo: ${formatEther(balance)} ETH`;
    } catch (error) {
      balanceDisplay.textContent = "Erro ao buscar o saldo.";
      console.error(error);
    }
  });

  checkTransactionsButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!isAddress(address)) {
      transactionsDisplay.textContent = "Endereço inválido!";
      return;
    }
    try {
      const history = await provider.getLogs({
        address,
        fromBlock: "0x0",
        toBlock: "latest",
      });
      transactionsDisplay.innerHTML = "<h3>Últimas Transações:</h3>";
      history.slice(0, 5).forEach((log) => {
        const txElement = document.createElement("p");
        txElement.textContent = `De: ${log.address} - Data: ${new Date(
          log.blockNumber * 1000
        ).toLocaleString()}`;
        transactionsDisplay.appendChild(txElement);
      });
    } catch (error) {
      transactionsDisplay.textContent = "Erro ao buscar as transações.";
      console.error(error);
    }
  });
}
