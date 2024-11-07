import { JsonRpcProvider, isAddress, formatEther } from "ethers";

const infuraApiKey = "a0b08043fa614e7ab3ca5f992148e70d";
const etherscanApiKey = "HVAS4P9M8UAX3XJDT7MJBUU4JHM8UXG4VB";

let provider = new JsonRpcProvider(
  `https://mainnet.infura.io/v3/${infuraApiKey}`
);

export function initApp(): void {
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
  const moreTransactionsButton = document.getElementById(
    "check__more-transactions"
  ) as HTMLButtonElement;
  const networkSelect = document.getElementById("network") as HTMLSelectElement;

  let allTransactions: {
    from: string;
    to: string;
    value: string;
    timeStamp: string;
  }[] = [];
  let displayedTransactions = 0;

  moreTransactionsButton.disabled = true;
  moreTransactionsButton.classList.add("opacity-50", "cursor-not-allowed");

  function updateProvider(): void {
    const selectedNetwork = networkSelect.value;
    provider = new JsonRpcProvider(
      `https://${selectedNetwork}.infura.io/v3/${infuraApiKey}`
    );
    console.log(`Rede alterada para: ${selectedNetwork}`);
  }

  networkSelect.addEventListener("change", updateProvider);

  checkBalanceButton.addEventListener("click", async () => {
    updateProvider();
    const address = walletInput.value.trim();
    if (!isAddress(address)) {
      balanceDisplay.textContent = "Endereço inválido!";
      balanceDisplay.classList.add("text-red-500");
      return;
    }
    try {
      const balance = await provider.getBalance(address);
      balanceDisplay.textContent = `Saldo: ${formatEther(balance)} ETH`;
      balanceDisplay.classList.remove("text-red-500");
      balanceDisplay.classList.add("text-[var(--pink)]");
      moreTransactionsButton.disabled = false;
      moreTransactionsButton.classList.remove(
        "opacity-50",
        "cursor-not-allowed"
      );
    } catch (error) {
      balanceDisplay.textContent = "Erro ao buscar o saldo.";
      console.error(error);
      balanceDisplay.classList.add("text-red-500");
    }
  });

  checkTransactionsButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!isAddress(address)) {
      transactionsDisplay.textContent = "Endereço inválido!";
      transactionsDisplay.classList.add("text-red-500");
      return;
    }

    try {
      const response = await fetch(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${etherscanApiKey}`
      );
      const data = await response.json();

      if (data.status === "1" && data.result.length > 0) {
        allTransactions = data.result;
        displayedTransactions = 0;
        transactionsDisplay.innerHTML =
          "<h3 class='text-lg font-semibold mb-2 text-[var(--pink)]'>Últimas Transações:</h3>";
        displayNextTransactions();
        moreTransactionsButton.classList.remove("hidden");
      } else {
        transactionsDisplay.textContent = "Nenhuma transação encontrada.";
        moreTransactionsButton.classList.add("hidden");
      }
    } catch (error) {
      transactionsDisplay.textContent = "Erro ao buscar as transações.";
      console.error(error);
    }
  });

  moreTransactionsButton.addEventListener("click", () => {
    displayNextTransactions();
  });

  function displayNextTransactions(): void {
    if (displayedTransactions >= allTransactions.length) {
      moreTransactionsButton.classList.add("hidden");
      return;
    }

    const transactionGroup = document.createElement("div");
    transactionGroup.className = `transaction-group p-4 mb-4 border border-[var(--pink)] rounded-lg bg-gray-800`;

    const transactionsToDisplay = allTransactions.slice(
      displayedTransactions,
      displayedTransactions + 5
    );

    transactionsToDisplay.forEach((tx) => {
      const transactionDiv = document.createElement("div");
      transactionDiv.className =
        "transaction mb-2 p-3 border border-gray-700 rounded-lg bg-gray-900";
      transactionDiv.innerHTML = `
        <p class="text-white"><strong>De:</strong> ${tx.from}</p>
        <p class="text-white"><strong>Para:</strong> ${tx.to}</p>
        <p class="text-white"><strong>Valor:</strong> ${formatEther(
          tx.value
        )} ETH</p>
        <p class="text-white"><strong>Data:</strong> ${new Date(
          parseInt(tx.timeStamp) * 1000
        ).toLocaleString()}</p>
      `;
      transactionGroup.appendChild(transactionDiv);
    });

    transactionsDisplay.appendChild(transactionGroup);
    displayedTransactions += transactionsToDisplay.length;

    if (displayedTransactions >= allTransactions.length) {
      moreTransactionsButton.classList.add("hidden");
    }
  }
}
