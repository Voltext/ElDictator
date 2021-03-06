module.exports = {
    emitter: process,
    run: (error) => {
        if (!error) return;

        if (client.channels.cache.has(process.env.LOG_CHANNEL_ID)) {
            client
                .channels
                .cache
                .get(process.env.LOG_CHANNEL_ID)
                .send(null, {
                    embed: {
                        color: 15684432,
                        timestamp: new Date(),
                        title: 'Unhandled Rejection | Uncaught Promise error:',
                        description: `\`\`\`x86asm\n${(error.stack || error.toString()).slice(0, 2048)}\n\`\`\``,
                        fields: [
                            {
                                name: 'Error Message:',
                                value: `\`${error.message || 'N/A'}\``
                            }
                        ]
                    }
                })
            ;
        }
    }
}