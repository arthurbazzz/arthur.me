export default function Dock() {
  return (
    <div className="relative z-10 flex h-16 items-center justify-center">
      <div className="flex items-center gap-2.5 rounded-2xl border border-border-subtle bg-[#0a0d12]/60 px-3.5 py-2 backdrop-blur-md">
        <a
          href="https://github.com/arthurbazzz"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-all duration-150 ease-in hover:-translate-y-1.5 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#d7dee6" strokeWidth="1.6" className="h-[19px] w-[19px]">
            <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.54-3.03-1.07-3.03-1.07-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.6.75.08-.58.32-.98.57-1.2-2-.23-4.1-1-4.1-4.46 0-.99.35-1.79.93-2.42-.1-.23-.4-1.16.09-2.42 0 0 .76-.24 2.5.93a8.6 8.6 0 0 1 4.55 0c1.74-1.17 2.5-.93 2.5-.93.5 1.26.2 2.19.1 2.42.58.63.93 1.43.93 2.42 0 3.47-2.11 4.23-4.12 4.45.33.28.62.85.62 1.72v2.55c0 .24.15.51.61.43A9 9 0 0 0 12 3Z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/arthurbazzz"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-all duration-150 ease-in hover:-translate-y-1.5 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#d7dee6" strokeWidth="1.6" className="h-[19px] w-[19px]">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <circle cx="8.2" cy="9" r="0.9" fill="#d7dee6" />
            <path d="M8.2 11.5v5" />
            <path d="M12 16.5v-3c0-1.2 1-2 2-2s2 .8 2 2v3" />
          </svg>
        </a>
        <a 
          href="mailto:arthur.bazzz@gmail.com" 
          title="E-mail"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-all duration-150 ease-in hover:-translate-y-1.5 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#d7dee6" strokeWidth="1.6" className="h-[19px] w-[19px]">
            <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
            <path d="M4 6.5 12 13l8-6.5" />
          </svg>
        </a>
        <a
          href="https://wa.me/5531991720098"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-all duration-150 ease-in hover:-translate-y-1.5 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#d7dee6" strokeWidth="1.6" className="h-[19px] w-[19px]">
            <path d="M6 18l-1.4 3L8 19.4A8 8 0 1 0 6 18Z" />
            <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 .8-.4.6-.9l-.5-1.1a.7.7 0 0 0-.8-.4l-1 .3c-.7-.4-1.6-1.3-2-2l.3-1a.7.7 0 0 0-.4-.8l-1.1-.5c-.5-.2-.9 0-.9.6Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
