class ModerateURL {
  getInfo() {
    return {
      id: 'moderation',
      name: 'Moderate URLs',
      blocks: [
        {
          opcode: 'moderate',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Check for URLs in [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Test Text with URLs',
            },
          },
        },
      ],
    };
  }

  moderate(args) {
    const mensagem = args.ONE;

    // Expressão regular para verificar se há URLs no texto
    const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/gi;

    if (urlRegex.test(mensagem)) {
      return true; // Se um URL for encontrado, retorna verdadeiro.
    }

    return false; // Se nenhum URL for encontrado, retorna falso.
  }
}

Scratch.extensions.register(new ModerateURL());
