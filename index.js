const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1113006938:AAER52qXO0q_jaHRcP0SDQUCYkXK7LL3gDM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg, match) => {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['Tarih'],
                ['Coğrafya'],
                ['Vatandaşlık'],
                ['Türkçe'],
                ['Matematik']
            ]
        })
    };
    bot.sendMessage(msg.chat.id, 'Merhaba ben bir botum sana nasıl yardımcı olabilirim', opts);
});
bot.onText(/Tarih/, (msg, match) => {
    // const opts = {
    //     reply_markup: {
    //         inline_keyboard: [
    //             [{
    //                     text: 'EUR',
    //                     callback_data: JSON.stringify({
    //                         'command': 'price',
    //                         'base': 'EUR'
    //                     })
    //                 },
    //                 {
    //                     text: 'USD',
    //                     callback_data: JSON.stringify({
    //                         'command': 'price',
    //                         'base': 'USD'
    //                     })
    //                 }
    //             ]
    //         ]
    //     }
    // }; 
    bot.sendMessage(msg.chat.id, 'www.aradigimbilgi.com', opts);
});