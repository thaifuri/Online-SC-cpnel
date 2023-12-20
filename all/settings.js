require("./module")

global.owner = "16196268188"
global.namabot = "ShinZuuBotzzMD"
global.namaCreator = "ঔৣ⃕᭝𝐇𝚫𝐑𝐃𝐙𝐌𝚯𝐃͢𝐙᭄`"
global.autoJoin = false
global.antilink = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = "Hola Mek Sv HardzMods"
global.tekspushkonv2 = "Hola Sv HardzMods"
global.packname = "ঔৣ⃕᭝𝐇𝚫𝐑𝐃𝐙𝐌𝚯𝐃͢𝐙᭄"
global.author = "Sticker By Hardzz"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})