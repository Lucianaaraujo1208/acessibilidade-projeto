# Usando a imagem base do Node.js
FROM node:16

# Instala as dependências do sistema necessárias para o Puppeteer
RUN apt-get update && apt-get install -y \
    libnss3 \
    libxss1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxshmfence1 \ 
    libxi6 \
    libxtst6 \
    libnspr4 \
    libcups2 \
    libxrandr2 \
    libgbm-dev \
    libnss3-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de pacotes para o contêiner
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o aplicativo irá rodar
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["node", "server.js"]