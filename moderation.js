class HelloWorld {
  getInfo() {
    return {
      id: 'moderation',
      name: 'Moderation',
      blocks: [
        {
          opcode: 'test',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Test Text'
        }
      ]
    };
  }

  hello() {
    return 'World!';
  }
}

Scratch.extensions.register(new HelloWorld());
