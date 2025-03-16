import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]  absolute top-0 left-0 right-0 bottom-0">
      <header className="">
        <div id="nav" className=" flex justify-between px-16 py-1 font-medium ">
          <div className=" flex gap-16  items-center">
            <div>
              Logo
            </div>
            <div >
              <div className=" flex gap-4">
                <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">Home</div>
                <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">Books</div>
                <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">Earn</div>
                <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">FAQ</div>
                <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">Contact</div>
              </div>
            </div>
          </div>
          <div className=" flex gap-4">
            <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">X</div>
            <div className=" rounded-2xl px-4 py-1 hover:bg-white/10 hover:backdrop-blur-3xl">D</div>
            <div>
              <div></div>
              <button id="" className=" bg-[#6154f3] text-white rounded-3xl px-4 py-2 text-xs ">Connect Wallet</button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <section id="hero" className=" h-[90vh]  flex justify-center items-center flex-col gap-12">
          <div className=" text-center max-w-lg space-y-6" >
            <div className=" flex justify-center">
              <p className=" bg-white/10 rounded-xl px-4 py-2 text">DeReader: World's first Web3 eBook Reader</p>
            </div>
            <div className=" space-y-4">
              <h1 className=" font-bold text-5xl">Own, Rent, and Trade.</h1>
              <p className=" text-xl"> A decentralized ecosystem that empowers readers and authors alike, Powered by FileCoin</p>
            </div>
          </div>
          <div className=" max-w-[1072px] w-full flex gap-4">

            <div className="bg-white/10 flex-1 px-8 py-10 rounded-2xl space-y-1 flex justify-between gap-8 ">
              <div>
                <h2 className=" font-medium text-xl">True Ownership</h2>
                <p className=" mt-2 text-sm">Buy books as NFTs and keep them forever.</p>
              </div>
              <div className=" flex items-end">
                <div id="iconx">icon</div>
              </div>
            </div>
            <div className="bg-white/10 flex-1 px-8 py-10 rounded-2xl space-y-1 flex justify-between gap-8 ">
              <div>
                <h2 className=" font-medium text-xl">Flexible Rentals</h2>
                <p className=" mt-2 text-sm">Rent books at NRC prices without long-term commitments.</p>
              </div>
              <div className=" flex items-end">
                <div id="iconx">icon</div>
              </div>
            </div>
            <div className="bg-white/10 flex-1 px-8 py-10 rounded-2xl space-y-1 flex justify-between gap-8 ">
              <div>
                <h2 className=" font-medium text-xl"> On-Chain Publishing </h2>
                <p className=" mt-2 text-sm"> Upload and tokenize books as NFTs, earning royalties on every transaction.</p>
              </div>
              <div className=" flex items-end">
                <div id="iconx">icon</div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer className="px-24 space-y-8">
        <div className="footer-bottom">
          <p>© 2025 DeReader. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
