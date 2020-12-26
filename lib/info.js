exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         

*About ${BotName}*

├≽️⚜ *AUTHOR*: ivector SQUAD
├≽️⚜ *DESIGNER*: IV3T0RBOT
├≽️⚜ *YOUTUBE*: IVECTOR_GTPS

Bot Ini dibuat dengan bahasa javascript
Ataupun dengan NodeJs. Jadi
Untuk ini saya mohon hargai Dan jangan
jual script Ini....

*SPESIAL THANKS TO:*
= *ST4RZ*
= *X-MRG3P5*
= *DANTOD*
= *DAN TEMAN YANG LAIN* :v

╭── *SOSMED ADMIN* ──
│1. *Group WhatsApp*
│ ${grupch1}
│
│2. *YouTube <subscribe>*
│ _${grupch2}_
│
│3. *Instagram <Follow>*
│ _${instagramlu}_
│
│4. *Creator ${BotName}*
│ _${whatsapplu}_
╰───────────`
}
