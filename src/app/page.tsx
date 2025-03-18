"use client";
import {prepareTransaction, toWei } from "thirdweb";
import { client } from "./client";
import {
  ConnectButton,
  TransactionButton,
} from "thirdweb/react";

import { sepolia } from "thirdweb/chains";

export default function Home() {
 

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold mb-4">Wallet Connection</h1>

      <div className="flex flex-col items-center gap-4">
        <ConnectButton
          client={client}
          accountAbstraction={{
            chain: sepolia,
            sponsorGas: true
          }}

        />
        
        <TransactionButton
          transaction={() => {
            // Create a transaction object and return it
            const transaction = prepareTransaction({
              to: "0x65CC52Fb427928F22964Aec6b217b80CfF382EAC",
              chain: sepolia,
              client: client,
              value: toWei("0.0"),
            });
            return transaction;
          }}
          onError={(error) => {
            // Handle error
            console.error(error);
          }}


        >
          Confirm Transaction
        </TransactionButton>
      </div>
    </main>
  );
}


