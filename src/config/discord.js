const discord = {
    token: process.env.STYLIZER_TOKEN || '',

    name: 'Bot',
    prefix: '~', // Or array
    owners: '707022657354203180', // Or array

    sharding: {
        enabled: false,
        maxShards: 2,
    },
};

if (discord.sharding.enabled && discord.sharding.maxShards < 2) discord.sharding.enabled = false;

module.exports = discord;
