"use client";

import React, { useEffect, useRef, useState } from "react";
import HalftoneArt from "./HalftoneArt";
import HalftoneBrasao from "./HalftoneBrasao";
import HalftoneDti from "./HalftoneDti";

const renderFetch = (key: number | string) => (
  <div key={key} className="flex flex-wrap gap-7">
    <div className="flex-none">
      <HalftoneArt />
    </div>
    <div className="flex-1 min-w-[240px]">
      <div className="font-bold text-[14.5px] text-accent-1">
        arthur@dev-portfolio
      </div>
      <div className="my-0.5 mb-1.5 text-dim">-------------------</div>
      <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-2.5 gap-y-[3px]">
        <dt className="whitespace-nowrap font-semibold text-accent-2">OS:</dt>
        <dd className="m-0 text-text-main">Full-Stack Developer</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">Host:</dt>
        <dd className="m-0 text-text-main">Belo Horizonte, MG — Brasil</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">
          Kernel:
        </dt>
        <dd className="m-0 text-text-main">Ciência da Computação @ FUMEC</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">
          Uptime:
        </dt>
        <dd className="m-0 text-text-main">Construindo coisas desde sempre</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">
          Languages:
        </dt>
        <dd className="m-0 text-text-main">
          PHP | Java | Javascript | TypeScript
        </dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">
          Backend:
        </dt>
        <dd className="m-0 text-text-main">Laravel | Spring</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">
          Frontend:
        </dt>
        <dd className="m-0 text-text-main">
          Next.js | React | Tailwind | Bootstrap
        </dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">SGDB:</dt>
        <dd className="m-0 text-text-main">Mysql | SQLServer | PostgreSQL</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">
          Infrastructure:
        </dt>
        <dd className="m-0 text-text-main">Docker</dd>
        <dt className="whitespace-nowrap font-semibold text-accent-2">IDEs:</dt>
        <dd className="m-0 text-text-main">VS Code | IntelliJ</dd>
      </dl>
      <div className="mt-3 flex gap-1.5">
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-[#ff2d20]"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-[#f59e0b]"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-[#000]"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-[#00758f]"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-[#dc382d]"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-[#2496ed]"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-accent-1"></span>
        <span className="inline-block h-4 w-[22px] rounded-[3px] bg-accent-2"></span>
      </div>
    </div>
  </div>
);

type CommandResult = { node?: React.ReactNode; clear?: boolean };
type CommandHandler = (raw: string, id: number) => CommandResult;

const COMMANDS: Record<string, CommandHandler> = {
  "sudo hire-arthur": () => ({
    node: (
      <div className="mt-1.5 text-accent-3">
        [sudo] senha para visitante: ✓ acesso concedido — mande uma mensagem em{" "}
        <b className="text-accent-3">contato</b>!
      </div>
    ),
  }),
  help: () => ({
    node: (
      <div className="mt-1.5 text-dim">
        comandos: <b className="text-accent-1">sobre</b>,{" "}
        <b className="text-accent-1">stack</b>,{" "}
        <b className="text-accent-1">projetos</b>,{" "}
        <b className="text-accent-1">experiencias</b>,{" "}
        <b className="text-accent-1">formacao</b>,{" "}
        <b className="text-accent-1">posts</b>,{" "}
        <b className="text-accent-1">tema</b>,{" "}
        <b className="text-accent-1">contato</b>,{" "}
        <b className="text-accent-1">neofetch</b>,{" "}
        <b className="text-accent-1">clear</b>
      </div>
    ),
  }),
  ajuda: () => ({
    node: (
      <div className="mt-1.5 text-dim">
        comandos: <b className="text-accent-1">sobre</b>,{" "}
        <b className="text-accent-1">stack</b>,{" "}
        <b className="text-accent-1">projetos</b>,{" "}
        <b className="text-accent-1">experiencias</b>,{" "}
        <b className="text-accent-1">formacao</b>,{" "}
        <b className="text-accent-1">posts</b>,{" "}
        <b className="text-accent-1">tema</b>,{" "}
        <b className="text-accent-1">contato</b>,{" "}
        <b className="text-accent-1">neofetch</b>,{" "}
        <b className="text-accent-1">clear</b>
      </div>
    ),
  }),
  sobre: () => ({
    node: (
      <p className="m-0 mt-2">
        Desenvolvedor full-stack em Belo Horizonte, MG. Trabalho principalmente
        com
        <b className="text-accent-1"> Laravel</b>,{" "}
        <b className="text-accent-1">Filament</b> e
        <b className="text-accent-1"> Next.js</b>, construindo sistemas para o
        setor público e produtos próprios. Também curso Ciência da Computação na
        FUMEC.
      </p>
    ),
  }),
  stack: () => ({
    node: (
      <ul className="m-0 mt-2 pl-[18px]">
        <li className="mb-1.5">
          <b className="text-accent-3">Backend:</b> PHP, Laravel
        </li>
        <li className="mb-1.5">
          <b className="text-accent-3">Frontend:</b> Next.js, React, TypeScript
        </li>
        <li className="mb-1.5">
          <b className="text-accent-3">SGDB:</b> MySQL, SQLServer, PostgreSQL
        </li>
        <li className="mb-1.5">
          <b className="text-accent-3">Infrastructure:</b> Docker, Portainer,
        </li>
        <li className="mb-1.5">
          <b className="text-accent-3">Observability & Monitoring:</b> NewRelic,
          Synk
        </li>
        <li className="mb-1.5">
          <b className="text-accent-3">Os:</b> MacOS, Omarchy, Win11
        </li>
      </ul>
    ),
  }),
  projetos: () => ({
    node: (
      <ul className="m-0 mt-2 pl-[18px]">
      </ul>
    ),
  }),
  experiencias: () => ({
    node: (
      <div className="mt-3.5 space-y-6">
        {/* Secretaria de Estado - Atual */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="flex-none w-16 sm:w-20 shrink-0 flex justify-center">
            <HalftoneBrasao />
          </div>
          <div className="flex-1">
            <b className="text-accent-3">
              Secretaria de Estado de Desenvolvimento Econômico de Minas Gerais
            </b>
            <br />
            <span className="text-dim text-sm">
              Desenvolvedor Full-Stack • Dezembro 2025 - (Atual)
            </span>
            <p className="mt-1 text-dim text-sm">
              Desenvolvimento de sistemas internos usando Laravel, Filament e Next.js.
            </p>
          </div>
        </div>

        {/* DTI Digital */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="flex-none w-16 sm:w-20 shrink-0 flex justify-center">
            <HalftoneDti />
          </div>
          <div className="flex-1">
            <b className="text-accent-3">
              DTI Digital
            </b>
            <br />
            <span className="text-dim text-sm">
              Estagiário de DevOps • Setembro 2025 - Dezembro 2025
            </span>
          </div>
        </div>

        {/* Secretaria de Estado - Estagio */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="flex-none w-16 sm:w-20 shrink-0 flex justify-center">
            <HalftoneBrasao />
          </div>
          <div className="flex-1">
            <b className="text-accent-3">
              Secretaria de Estado de Desenvolvimento Econômico de Minas Gerais
            </b>
            <br />
            <span className="text-dim text-sm">
              Estagiário de TI • Março 2025 - Setembro 2025
            </span>
          </div>
        </div>
      </div>
    ),
  }),
  posts: () => ({
    node: (
      <div className="mt-3.5 space-y-4">
        <p className="text-dim">
          Aqui estão os meus posts recentes. Digite{" "}
          <b className="text-accent-1">post &lt;id&gt;</b> para ler completo.
        </p>

        <div className="border border-border-subtle bg-white/5 rounded-md p-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="m-0 text-[14px] font-bold text-accent-1">
              Sem posts ainda
            </h3>
            <span className="text-dim text-[11px]">13 Jul 2026</span>
          </div>
          <p className="text-text-main text-[13px] leading-relaxed m-0">
            No content.
          </p>
        </div>
      </div>
    ),
  }),
  tema: (raw) => {
    const parts = raw.split(/\s+/);
    const mode = parts[1];

    if (mode === "branco" || mode === "claro" || mode === "light") {
      document.body.classList.add("theme-light");
      return {
        node: (
          <div className="mt-1.5 text-accent-1">Tema alterado para claro.</div>
        ),
      };
    } else if (mode === "preto" || mode === "escuro" || mode === "dark") {
      document.body.classList.remove("theme-light");
      return {
        node: (
          <div className="mt-1.5 text-accent-1">Tema alterado para escuro.</div>
        ),
      };
    }

    const isLight = document.body.classList.contains("theme-light");
    if (isLight) {
      document.body.classList.remove("theme-light");
      return {
        node: (
          <div className="mt-1.5 text-accent-1">Tema alterado para escuro.</div>
        ),
      };
    } else {
      document.body.classList.add("theme-light");
      return {
        node: (
          <div className="mt-1.5 text-accent-1">Tema alterado para claro.</div>
        ),
      };
    }
  },
  formacao: () => ({
    node: (
      <>
        <p className="m-0 mt-2">
          Ciência da Computação — Universidade FUMEC (FACE) 2024 - 2027
        </p>
        <p>
          {" "}
          Matérias Importantes: Estrutura de dados, Análise de Algoritmos,
          Programação Orientada a Objetos, Desenvolvimento Web Backend,
          Desenvolvimento Web Frontend
        </p>
        <p className="m-0 mt-2">
          Técnico em Desenvolvimento de Sistemas - SENAI Horto 2021-2023
        </p>
      </>
    ),
  }),
  contato: () => ({
    node: (
      <>
        <p className="m-0 mt-2">
          E-mail:{" "}
          <a
            href="mailto:seu-email@exemplo.com"
            className="text-accent-1 border-b border-dashed border-accent-1/40 no-underline hover:border-accent-2/50 hover:text-accent-2"
          >
            arthurbazzz@gmail.com
          </a>
          <br />
          GitHub:{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-1 border-b border-dashed border-accent-1/40 no-underline hover:border-accent-2/50 hover:text-accent-2"
          >
            github.com/arthurbazzz
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-1 border-b border-dashed border-accent-1/40 no-underline hover:border-accent-2/50 hover:text-accent-2"
          >
            linkedin.com/in/arthurbazzz
          </a>
        </p>
      </>
    ),
  }),
  neofetch: (_raw, id) => ({
    node: <div className="mt-3.5">{renderFetch(id + 1)}</div>,
  }),
  clear: () => ({ clear: true }),
};

export default function Terminal() {
  const initialHistory = [
    <React.Fragment key="initial-neofetch">{renderFetch(0)}</React.Fragment>,
    <div key="initial-help" className="mt-[18px]">
      <div className="text-dim">
        visitante@dev-portfolio:~$ <b className="text-accent-1">help</b>
      </div>
      <div className="mt-1.5 text-dim">
        digite um comando: <b className="text-accent-1">sobre</b>,{" "}
        <b className="text-accent-1">stack</b>,{" "}
        <b className="text-accent-1">projetos</b>,{" "}
        <b className="text-accent-1">experiencias</b>,{" "}
        <b className="text-accent-1">formacao</b>,{" "}
        <b className="text-accent-1">posts</b>,{" "}
        <b className="text-accent-1">tema</b>,{" "}
        <b className="text-accent-1">contato</b>,{" "}
        <b className="text-accent-1">neofetch</b>,{" "}
        <b className="text-accent-1">clear</b>
      </div>
    </div>,
  ];

  const [history, setHistory] = useState<React.ReactNode[]>(initialHistory);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const termBodyRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll && termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
      setShouldScroll(false);
    }
  }, [history, shouldScroll]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const raw = input.trim();
    setInput("");
    if (!raw) return;

    const cmdName = raw.toLowerCase().split(/\s+/)[0];
    const currentId = Date.now();

    const handler = COMMANDS[cmdName];
    const { node, clear } = handler
      ? handler(raw, currentId)
      : {
          node: (
            <div className="mt-1.5 text-dim">
              comando não encontrado. digite{" "}
              <b className="text-accent-1">help</b>.
            </div>
          ),
        };

    if (clear) {
      setHistory([]);
      return;
    }

    const newEntry = (
      <div key={currentId} className="mt-[18px]">
        <div className="text-dim">
          visitante@dev-portfolio:~$ <b className="text-accent-1">{raw}</b>
        </div>
        {node}
      </div>
    );

    setHistory((prev) => [...prev, newEntry]);
    setShouldScroll(true);
  };

  return (
    <div className="relative z-10 flex h-[calc(100%-34px-64px)] items-center justify-center p-2.5 sm:p-6">
      <div
        className="flex h-full w-full max-w-[920px] flex-col overflow-hidden rounded-lg sm:rounded-[10px] border border-border-subtle bg-glass backdrop-blur-[10px] shadow-[0_30px_80px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,255,255,0.03)] sm:max-h-[600px]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="relative flex h-[38px] flex-none items-center justify-center border-b border-border-subtle bg-gradient-to-b from-white/5 to-transparent">
          <div className="absolute left-3 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-danger"></span>
            <span className="h-3 w-3 rounded-full bg-warn"></span>
            <span className="h-3 w-3 rounded-full bg-ok"></span>
          </div>
          <div className="text-[12.5px] text-dim">arthur@dev-portfolio: ~</div>
          <div className="absolute right-3 text-[13px] tracking-[2px] text-dim">
            ⌕ ≡
          </div>
        </div>

        <div
          className="term-body flex-1 overflow-y-auto px-[22px] py-5 text-[12.5px] sm:text-[13.5px] leading-[1.55]"
          ref={termBodyRef}
        >
          {history}

          <div className="mt-3.5 flex items-center gap-2">
            <span className="whitespace-nowrap text-accent-1">
              visitante@dev-portfolio:~$
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
              autoFocus
              className="flex-1 bg-transparent text-text-main outline-none caret-accent-1 border-none font-inherit"
            />
            <span className="animate-blink ml-[2px] inline-block h-[15px] w-2 bg-accent-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
