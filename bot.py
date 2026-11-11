#!/usr/bin/env python3
"""
Telegram Bot (WebApp) Integratsiyasi
Ushbu bot foydalanuvchiga bitta tugma bilan Chiziqli Algebra Web Ilovasini
to'g'ridan-to'g'ri Telegram ichida to'liq ekranli ochib beradi!
"""

import os
from aiogram import Bot, Dispatcher, types
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from aiogram.filters import Command
import asyncio

# @BotFather dan olingan bot tokenini kiriting yoki .env ga qo'ying
BOT_TOKEN = os.getenv("BOT_TOKEN", "YOUR_TELEGRAM_BOT_TOKEN_HERE")

# Web ilovaning tashqi internetdagi URL manzili (masalan ngrok, github pages, render yoki koyeb orqali)
WEB_APP_URL = os.getenv("WEB_APP_URL", "https://your-domain-or-ngrok.app")

dp = Dispatcher()

@dp.message(Command("start"))
async def start_handler(message: types.Message):
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="📐 Chiziqli Algebra Kalkulyatorini Ochish",
                    web_app=WebAppInfo(url=WEB_APP_URL)
                )
            ]
        ]
    )
    await message.answer(
        f"Assalomu alaykum, {message.from_user.full_name}!\n\n"
        "Ushbu bot Chiziqli algebra fanidan semestr davomida o'tiladigan barcha mavzularni "
        "(Matritsalar, Determinantlar, Teskari matritsa, CHTS, Kramer, Gauss, Vektorlar) "
        "bosqichma-bosqich ishlab beradi!\n\n"
        "Quyidagi tugmani bosing:",
        reply_markup=kb
    )

async def main():
    if BOT_TOKEN == "YOUR_TELEGRAM_BOT_TOKEN_HERE":
        print("⚠️ Iltimos, bot.py fayliga Telegram bot tokeningizni kiriting.")
        return
    bot = Bot(token=BOT_TOKEN)
    print("🤖 Telegram Bot ishga tushdi...")
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
