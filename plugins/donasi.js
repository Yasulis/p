let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • tri [0895410817138]
│ • Axis [83143092635]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/BochilGaming
│ • Gopay [nope]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
