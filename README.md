# READ ME

# Extensive Number foi desenvolvido utilizando NodeJS (v9.2.1)

# Ferramentas Utilizadas:
VS code (1.33.1)

# Gerenciador de dependências:
NPM (5.6.0)

# Dependências do projeto:
Express (ˆ4.16.4)

# Sistema operacional utilizado durante o desenvolvimento:

Mac OS (10.10.5)

# Iniciar o servidor:

(navegue até a pasta onde foi baixado o projeto)

Comando:

node server.js ou npm start

# Docker

  O projeto pode ser executado através dos comandos
  
    docker build -t extensive_numbers_dockernode .
    docker run -p 3000:3000 -d extensive_numbers_dockernode

# Configurando servidor

No arquivo server.js foi configurado para que o servidor escute as requisições na porta 3000, para usar localmente e sem o uso do DOCKER, altere a constante HOST para localhost ou 127.0.0.1

Caso execute a aplicação através do DOCKER utilize a configuração do HOST 0.0.0.0

# Exemplos de uso:

Retorno: em formato JSON.

Utilizando browser (GET):

Exemplo 1:
http://localhost:3000/5632
Retorno: {"extenso":"cinco mil e seiscentos e trinta e dois"}

Exemplo 2:
http://localhost:3000/1
Retorno: {"extenso":" um"}

Exemplo 3:
http://localhost:3000/-1042
Retorno: { "extenso": "menos mil e quarenta e dois" }

Utilizando curl (GET):

Exemplo 1:
curl http://localhost:3000/123
Retorno: {"extenso":"cento e vinte e três"} 

Exemplo 2:
curl http://localhost:3000/1
Retorno: { "extenso": "um" }

Exemplo 3:
curl http://localhost:3000/-1042
Retorno: { "extenso": "menos mil e quarenta e dois" }

# min -99999 | max 99999

#We Will... Whatever It Takes!