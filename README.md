Ushbu loyiha foydalanuvchi tomonidan manzil satriga kiritilgan JavaScript orqali Google sahifasini o‘zgartirish, sahifa haqidagi ma’lumotlarni Telegram bot orqali yuborish va maxfiy xabarlarni foydalanuvchiga ko‘rsatish imkonini beradi.

## Boshlanishi:
1. `public/script.js` faylni internetda ochiq serverga joylang (masalan: PythonAnywhere)
2. `backend/app.py` faylni Flask serverda ishga tushiring
3. Telegram bot tokeni va chat ID'ni sozlang

## Ishlash tamoyili:
1. Foydalanuvchi manzilga quyidagini yozadi:
   ```javascript
   javascript:(function(){var s=document.createElement('script');s.src='https://yourdomain.com/script.js';document.body.appendChild(s);})();
   ```
2. Sahifa JS kodini yuklaydi, qidiruv oynasini yashiradi va sizga URLni yuboradi
3. Siz Telegram botga maxfiy xabar yuborasiz
4. U xabar foydalanuvchiga sahifada xira ko‘rinishda chiqadi
