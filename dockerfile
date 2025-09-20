# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para o container
COPY . .

# Compila o projeto TypeScript
RUN npm run build

# Expõe a porta que o NestJS vai rodar (default 3000)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]
