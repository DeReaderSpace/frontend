import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]  absolute top-0 left-0 right-0 bottom-0">
      <header className="">
        <div id="banner" className=" bg-[#6154f3] py-2 text-center">
          <p className=" font-bold text-sm">35M in POL Grants! Polygon Community Grants S2 is now live</p>
        </div>
        <div id="nav" className=" flex justify-between px-16 py-4 font-medium ">
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
              <p className=" bg-white/10 rounded-xl px-4 py-2 text">Introducing: Aggregated Bookchains</p>
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
        <section className=" h-[600px] bg-black px-24">
          <div id="place-holder" className=" h-[400px] rounded-2xl bg-white/20"></div>
        </section>
        <section className="bg-black flex justify-center items-center gap-12 flex-col">
          <div id="adopted" className=" text-center max-w-5xl space-y-4  w-full">
            <div>
              <h2 className=" text-5xl">The Most Adopted Scaling Technology for Digital Books</h2>
            </div>
            <div className=" flex justify-center">
              <div className=" bg-white/10 rounded-2xl px-4 py-2 text">Experience the next evolution in digital reading.</div>
            </div>
          </div>
          <div id="tech" className=" max-w-[1072px] space-y-48 ">
            <div id="texc1" className=" flex gap-8 h-[270px] justify-center items-center">
              <div className=" flex-1">
                <video src="/pos.mp4" autoPlay muted loop width={400} className=" aspect-video object-cover object-center "></video>
              </div>
              <div className=" flex-1 max-w-md flex flex-col justify-between  h-full">
                <div className=" space-y-4">
                  <h2 className=" font-medium text-3xl">Aggregated Bookchains <span className=" rounded-3xl text-xs px-2 py-1 bg-white/20">Live</span></h2>
                  <p>Support the most advanced decentralized book ecosystem, offering seamless NFT-based ownership and rentals with fast transactions and near-zero gas fees. Enjoy a frictionless reading experience with full EVM compatibility.</p>
                </div>
                <div className=" flex gap-4">
                  <button className="font-mediun bg-[#6154f3] text-white rounded-full px-4 py-2  ">Learn More</button>
                  <button className="font-medium bg-white text-black rounded-full px-4 py-2  ">Open Docs</button>
                </div>
              </div>
            </div>
            <div id="texc1" className=" flex flex-row-reverse gap-8 h-[270px] justify-center items-center">
              <div className=" flex-1">
                <video src="/pos.mp4" autoPlay muted loop width={400} className=" aspect-video object-cover object-center "></video>
              </div>
              <div className=" flex-1 max-w-md flex flex-col justify-between  h-full">
                <div className=" space-y-4">
                  <h2 className=" font-medium text-3xl">DeReader zkBookchain<span className=" rounded-3xl text-xs px-2 py-1 bg-white/20">Live</span></h2>
                  <p>Unlock scalable and secure digital book transactions with the first ZK-rollup-powered bookchain, ensuring EVM equivalence and near-zero gas costs.

                    🔹 Trustless Book Ownership
                    🔹 Lightning-Fast Transactions</p>
                </div>
                <div className=" flex gap-4">
                  <button className="font-mediun bg-[#6154f3] text-white rounded-full px-4 py-2  ">Learn More</button>
                  <button className="font-medium bg-white text-black rounded-full px-4 py-2  ">Open Docs</button>
                </div>
              </div>
            </div>
            <div id="texc1" className=" flex gap-8 h-[270px] justify-center items-center">
              <div className=" flex-1">
                <video src="/pos.mp4" autoPlay muted loop width={400} className=" aspect-video object-cover object-center "></video>
              </div>
              <div className=" flex-1 max-w-md flex flex-col justify-between  h-full">
                <div className=" space-y-4">
                  <h2 className=" font-medium text-3xl">DeReader PrivateBookchain  <span className=" rounded-3xl text-xs px-2 py-1 bg-white/20">Live</span></h2>
                  <p>A decentralized bookchain that enables private book ownership and rentals, leveraging privacy-focused rollups and local transaction execution—because privacy matters in digital reading.</p>
                </div>
                <div className=" flex gap-4">
                  <button className="font-mediun bg-[#6154f3] text-white rounded-full px-4 py-2  ">Learn More</button>
                  <button className="font-medium bg-white text-black rounded-full px-4 py-2  ">Open Docs</button>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className=" px-24 py-24 space-y-8">
          <div>
            <h2 className=" text-6xl font-semibold max-w-xl w-full ">The largest and
              most thriving ecosystem</h2>
          </div>
          <div className=" flex gap-6">
            <div className=" flex-1 space-y-8">
              <div className=" h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex items-end px-8 py-16">
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>
                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
              <div className=" h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex items-end px-8 py-16">
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>
                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
            </div>
            <div className=" flex-1 space-y-8 translate-y-32">
              <div className=" h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex items-end px-8 py-16">
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>
                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
              <div className=" h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex items-end px-8 py-16">
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>
                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
            </div>
            <div className=" flex-1 space-y-8">
              <div className=" h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex items-end px-8 py-16">
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>
                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
              <div className=" h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex items-end px-8 py-16">
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>
                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-24 py-24 space-y-8">
          <div>
            <h3 className="text-5xl mb-4">Time to roll up your sleeves</h3>
          </div>
          <div>
            <div id="" className=" flex gap-8">
              <div className=" flex-1 h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex justify-between flex-col px-8 py-16">
                <div>
                  <img src="/vercel.svg" alt="" width={200} height={200} />
                </div>
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>

                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>
              <div className="flex-1 h-[480px] rounded-2xl bg-[#6154f3]/5 border border-white/5 flex justify-between flex-col px-8 py-16">
                <div>
                  <img src="/vercel.svg" alt="" width={200} height={200} />
                </div>
                <div>
                  <h3 className=" text-2xl font-semibold">
                    28K+
                  </h3>

                  <p className="text-lg">Total Contract Creators</p>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="px-24 py-24 space-y-8">
          <div>
            <h3 className=" text-5xl">In the news</h3>
          </div>
          <div>
            <div className="newItem w-[360px] h-[360px] rounded-2xl bg-white/2">
              <div>
                <img src="https://cdn.prod.website-files.com/637e2b6d602973ea0941d482/67b4c78cbdcdbaff0b62c748_AggEvents-p-800.png" height={200} width={200} className=" w-full h-full object-cover rounded-t-2xl" alt="" />
              </div>
              <div className=" p-6">
                <div className=" flex justify-between text-xs space-y-4 text-white/20">
                  <p>February 18, 2025</p>
                  <p>Aggregator</p>
                </div>
                <div>
                  <p className=" text-lg">A decentralized bookchain   transaction execution—because privacy matters in digital reading.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-8 space-y-8">
          <div className=" h-[360px] bg-red-100 rounded-2xl relative" >
            <div className=" z-10 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center px-16 text-white">
              <p className=" text-lg text-[#6154f3]">Stay Up to date</p>
              <h3 className=" text-4xl font-medium">Get our newsletter</h3>
            </div>
            <video autoPlay loop muted className=" h-full w-full object-cover absolute top-0 left-0 right-0 bottom-0 -z-0" src="https://polytech-assets.polygon.technology/videos/homepage/newsletter.mp4"></video>

          </div>
        </section>
      </section>
      <footer className="px-24 py-24 space-y-8">
        <div className="footer-container flex gap-24 flex-wrap">
          <div className="footer-section space-y-4">
            <h3>Solutions</h3>
            <ul className=" text-white/20 space-y-4">
              <li><a href="#">Aggregation Layer</a></li>
              <li><a href="#">DeReader PoS</a></li>
              <li><a href="#">DeReader zkBookchain</a></li>
              <li><a href="#">DeReader CDK</a></li>
              <li><a href="#">DeReader PrivateBookchain</a></li>
            </ul>
          </div>

          <div className="footer-section space-y-4">
            <h3>Resources</h3>
            <ul className="text-white/20 space-y-4">
              <li><a href="#">zk Research</a></li>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Plonky3</a></li>
            </ul>
          </div>

          <div className="footer-section space-y-4">
            <h3>Community</h3>
            <ul className="text-white/20 space-y-4">
              <li><a href="#">Community Home</a></li>
              <li><a href="#">Community Grants</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Ecosystem Jobs</a></li>
              <li><a href="#">Governance Pillars</a></li>
              <li><a href="#">Ecosystem Explorer</a></li>
              <li><a href="#">dabl.club</a></li>
            </ul>
          </div>

          <div className="footer-section space-y-4">
            <h3>Developers</h3>
            <ul className=" text-white/20 space-y-4">
              <li><a href="#">Tech Docs</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <div className="footer-section space-y-4">
            <h3>Use DeReader</h3>
            <ul className="text-white/20 space-y-4">
              <li><a href="#">DeReader Portal</a></li>
              <li><a href="#">Staking</a></li>
              <li><a href="#">DeReader Scan</a></li>
              <li><a href="#">Faucet</a></li>
              <li><a href="#">Token Mapper</a></li>
            </ul>
          </div>

          <div className="footer-section space-y-4">
            <h3>Legal</h3>
            <ul className="text-white/20 space-y-4">
              <li><a href="#">Legal Terms Home</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 DeReader. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
