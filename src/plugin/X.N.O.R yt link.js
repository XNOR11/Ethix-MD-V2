import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "ping") {
    const start = new Date().getTime();
    await m.React('👀');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = *╭─────────────⊶*
*│* ○ `Hey WhatsApp User 👋` 
*│* ○ const str = hey ${m.pushName} 
*╰──────────────⊶*
 *────────────⊶*

*`Ethix-MD V2` GitHub Workflow |  Free Platform |  X.N.O.R Education*
Link 🔗
https://youtu.be/fbQfg5V6mL0

━━━━━━━━━━━ *`Description`* ━━━━━━━━━━━

*This video explains how to easily deploy a bot on a free platform.*

📌 Go to this link with Action Workflow Text and copy it. 
Link 🔗
https://whatsapp.com/channel/0029ValM9aSL7UVVtj2uvV3x


📌 Follow Whatsapp Channel to get more. 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> X.N.O.R Education ©

`Share with everyone with this Messenge.`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
