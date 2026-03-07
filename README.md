🌸 Dia das Mulheres — Site Presente
Uma landing page pessoal criada como presente para minha esposa no Dia Internacional da Mulher (8 de março).

✨ Funcionalidades

Hero animado com pétalas caindo e animações de entrada escalonadas
Seção de mensagem com reveal acionado pelo scroll
Galeria de fotos com efeitos suaves de hover
Contador ao vivo contando anos, meses, dias, horas, minutos e segundos desde que nos conhecemos — atualizado a cada segundo em tempo real

🛠 Stack

React 19 + TypeScript
Vite
Tailwind CSS
CSS @keyframes para os efeitos de queda das pétalas, fade-up e pulse

📁 Estrutura do Projeto
src/
├── components/
│ ├── Petals.tsx # Pétalas flutuantes ao fundo
│ ├── HeroSection.tsx # Tela de abertura
│ ├── MessageSection.tsx # Mensagem pessoal
│ ├── GallerySection.tsx # Grade de fotos
│ └── CounterSection.tsx # Contador de tempo ao vivo
├── hooks/
│ ├── useCounter.ts # Cálculo do tempo decorrido em tempo real
│ └── useInView.ts # Scroll trigger com IntersectionObserver
├── assets/ # Fotos (photo1–4.jpg)
├── App.tsx
├── main.tsx
└── index.css # Tailwind v4 + tokens via @theme + keyframes

🚀 Como rodar
Instalar dependências com npm install

# Adicionar suas fotos em src/assets/

# Renomeie para: photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg

# Iniciar servidor de desenvolvimento

npm run dev

# Gerar build de produção

npm run build

Feito com ❤️ para Ana Clara.
