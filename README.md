# 🐉 Trybers and Dragons 🐲

#### Nesse projeto, foi aplicado os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).


## 🤹 Habilidades:

- O conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo. 
- A habilidade de criar e utilizar Interface;
- A habilidade de utilizar Composição;
- Implementar, em TypeScript, Classes, Instâncias, Atributos, Métodos e Objetos;
- O conhecimento e aplicação dos princípios SOLID.

## 🛠️ Ferramentas e Tecnologias Utilizadas:

- [Node.js](https://nodejs.org/en/);
- [Docker](https://www.docker.com/);
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [TypeScript](https://www.typescriptlang.org/)
- [POO](https://www.devmedia.com.br/os-4-pilares-da-programacao-orientada-a-objetos/9264)
- [SOLID](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)

## ⚙ Como rodar o projeto na sua máquina

<strong>1. Faça o git clone na sua máquina e entre no diretório:</strong>
 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!
 ```
 git clone git@github.com:git@github.com:BrunoPelegrino/Trybe-and-Dragons.git
 cd Trybers_and_dragons
 ```

 <strong>2. Escolha por onde rodar a aplicação: Docker vs Local</strong>

<details>
  <summary><strong>🐳 Rodando no Docker</strong></summary> 
  </br>

  **:warning: Seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  👉 <strong> 2.1 Rode os serviços `node` e `db` com o comando: </strong>
  ```
  docker-compose up -d --build
  ```

  :warning: Lembre-se de parar qualquer aplicação que estiver usando localmente na porta padrão (`3306`), seja docker ou mySQL, ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `trybers_and_dragons` e outro chamado `trybers_and_dragons_db`;

  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code;

  👉 <strong>2.2 Use o comando:</strong>
  ```
  docker exec -it trybers_and_dragons bash
  ```
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  👉 <strong>2.3 Instale as dependências dentro do container com:</strong>
  ```
  npm install
  npm run debug
  ```

  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

</details>

<details>
  <summary><strong> 💻 Localmente</strong></summary> 
</br>

👉 <strong>2.1 Instale as dependências: </strong>
```
npm install
```

- **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
- **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
- **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  <br/>
 </details>

 ---
© Desenvolvido por [Bruno Pelegrino Pinto](https://www.linkedin.com/in/bruno-pelegrino/) 
