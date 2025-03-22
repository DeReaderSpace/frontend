"use client";
import { useState } from "react";

export default function FAQComponent() {
  const faqs = [
    { question: "What is DeReader?", answer: "DeReader is the world's first Web3 eBook Reader powered by FileCoin." },
    { question: "How does NFT book ownership work?", answer: "You can buy books as NFTs and keep them forever." },
    { question: "Can I rent books instead of buying?", answer: "Yes! You can rent books at NRC prices without long-term commitments." },
    { question: "How does on-chain publishing work?", answer: "Authors can upload and tokenize books as NFTs, earning royalties on every transaction." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] absolute top-0 left-0 right-0 bottom-0">
      <header>
        <div id="nav" className="flex justify-between px-16 py-1 font-medium">
          <div className="flex gap-16 items-center">
            <div>
              <img src="/greenbooklogo.png" alt="DeReader" width="75px" />
            </div>
            <div>
              <div className="flex gap-4">
                <div className="rounded-2xl px-4 py-1 hover:bg-white/10">Home</div>
                <div className="rounded-2xl px-4 py-1 hover:bg-white/10">Books</div>
                <div className="rounded-2xl px-4 py-1 hover:bg-white/10">Earn</div>
                <div className="rounded-2xl px-4 py-1 hover:bg-white/10">FAQ</div>
                <div className="rounded-2xl px-4 py-1 hover:bg-white/10">Contact</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#6154f3] text-white rounded-3xl px-4 py-2 text-xs">Connect Wallet</button>
          </div>
        </div>
      </header>

      <section id="faq" className="flex flex-col items-center justify-center py-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="w-full text-left text-lg font-medium flex justify-between"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="px-24 space-y-8">
        <div className="footer-bottom">
          <p>© 2025 DeReader. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
