
import "../styles/Home.scss";
import Home_Services from "./components/HomeSlider";

import About from "./components/About";

// export const metadata = {
//   title: "Vibe Eazy",
//   description: "Home || Enjoy More, Spend Less!",
// };

export default function Home() {
  return (
    <main className="home-main">
      <Home_Services />
      <section className="tag">
        <h1>Enjoy More, Spend Less!</h1>
        <p>
        Vibeazy helps you find nice restaurants & bars within your budget, where you can hang out with friends and family. Plus, with the group wallet feature, you can pool funds together, making group outings more affordable and enjoyable.
        </p>
      </section>
     <About />
    </main>
  );
}
