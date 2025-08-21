
import { Telegraf, Markup } from "telegraf"
const token = '8188852875:AAGrTPHBnMkhFo4ZrbJ2QZG4ddvL1f_z6b0'

const bot = new Telegraf(token)
const webAppUrl = 'https://app-random-tg.web.app/'

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Жми на кнопку "Участвовать"!',
        Markup.inlineKeyboard([
            Markup.button.webApp('Участвовать', webAppUrl)
        ])
    )
})

bot.launch()