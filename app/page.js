import {FiGithub, FiLinkedin} from "react-icons/fi";

export default function Home() {
  return (
    <div className="max-w-4xl p-8 mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 justify-center py-20">
        <header>
          <div className="text-5xl text-center">Armin Shahnami</div>
        </header>

        <section id="about" className="m-auto">
          <div>Computer Science graduate</div>
        </section>

        <section id="projects" className="flex flex-col gap-1">
            <div className="text-xl">Projects</div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-between bg-[--color-project] h-24 p-2 rounded">
                <div className="text-lg">
                  Paper Trader
                </div>

                <div className="text-md">
                  A full-stack web application for paper trading stocks.
                </div>

                <div className="text-sm">
                  The repository can be found at <a href="https://github.com/ashahnami/paper-trader" className="font-medium text-blue-400 hover:underline">github.com/ashahnami/paper-trader</a>.
                </div>
              </div>

              <div className="flex flex-col justify-between bg-[--color-project] h-24 p-2 rounded">
                <div className="text-lg">
                  Typing Game
                </div>

                <div className="text-md">
                  A multiplayer typing race website.
                </div>

                <div className="text-sm">
                  The repository can be found at <a href="https://github.com/ashahnami/typing-game" className="font-medium text-blue-400 hover:underline">github.com/ashahnami/typing-game</a>.
                </div>
              </div>
            </div>

            <div className="text-lg mt-2">Misc</div>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami/dotfiles" className="font-medium text-blue-400 hover:underline">dotfiles</a> - Personal Linux configuration files
                </li>
            </ul>

            <p>Other repositories can be found at my GitHub page via the link below.</p>
        </section>

        <section id="contact" className="flex flex-row gap-5 m-auto">
            <a href="https://github.com/ashahnami">
                <FiGithub className="text-2xl hover:text-blue-400 transition-colors duration-150"/>
            </a>

            <a href="https://www.linkedin.com/in/arminshahnami">
                <FiLinkedin className="text-2xl hover:text-blue-400 transition-colors duration-150" />
            </a>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 m-2 w-screen text-center text-[--color-copyright]">
        Armin Shahnami © 2025
      </footer>
    </div>
  );
}
