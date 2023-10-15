class Moderation {
  getInfo() {
    return {
      id: 'moderation',
      name: 'Moderation',
      blocks: [
        {
          opcode: 'moderate',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Moderate [ONE] for Prohibited Words',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Test Moderation Text',
            },
          },
        },
      ],
    };
  }

  moderate(args) {
    const mensagem = args.ONE.toLowerCase();
    const url = "https://oreczxofficial.github.io/bad.txt"; // O URL é fixo

    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Não foi possível buscar o arquivo.');
        }
      })
      .then((textoDoSite) => {
        const palavrasProibidas = textoDoSite.toLowerCase().split('\n');

        for (const palavraProibida of palavrasProibidas) {
          if (mensagem.includes(palavraProibida.trim())) {
            return false; // Se uma palavra proibida for encontrada, retorna falso.
          }
        }

        return true; // Se nenhuma palavra proibida for encontrada, retorna verdadeiro.
      })
      .catch((error) => {
        console.error(error);
        return false; // Em caso de erro na solicitação, também retorna falso.
      });
  }
}

Scratch.extensions.register(new Moderation());
