const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1217996946:AAFJQc6enNJ5Gi99GFIbZjFwBnyr-ZOFSLM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg, match) => {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['BenimHocam'],
                ['Data'],
                ['Lider'],
                ['Murat'],
                ['Pegem'],
                ['Süvari'],
                ['UzmanKariyer'],
                ['Yargı'],
                ['Yediiklim'],
                ['Zorlu'],
                ['İsem'],
                ['MehmetEgit'],
                ['EgitimBilimleri']
            ]
        })
    };
    bot.sendMessage(msg.chat.id, 'Merhaba hoşgeldiniz ben bir botum. 2020 denemeleri için aşağıdaki butonlara tıklayabilirsin.', opts);
});
bot.onText(/BenimHocam/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/UHrW', opts);
});
bot.onText(/Data/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/C2wxa', opts);
});
bot.onText(/Lider/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/fyq7R0', opts);
});
bot.onText(/Murat/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/drDWM', opts);
});
bot.onText(/Pegem/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/VvKSgi', opts);
});
bot.onText(/Süvari/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/EgU', opts);
});
bot.onText(/UzmanKariyer/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/V3VwoY', opts);
});
bot.onText(/Yargı/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'http://tr.link/MveRJj', opts);
});
bot.onText(/Yediiklim/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/nGlJMY', opts);
});
bot.onText(/Zorlu/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/LLA2', opts);
});
bot.onText(/İsem/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'http://tr.link/kzd2', opts);
});
bot.onText(/MehmetEgit/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/zVuJNE', opts);
});
bot.onText(/EgitimBilimleri/, (msg, match) => {
    const opts = {
        reply_markup: {
            
        }
    };
    bot.sendMessage(msg.chat.id, 'https://tr.link/mhOTi', opts);
});