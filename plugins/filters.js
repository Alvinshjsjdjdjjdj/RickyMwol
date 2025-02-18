
  
/* Copyright (C) 2020 farhan-dqz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');

const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if (!!message.mention && message.mention[0] == '917560831917@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Asuravethalam.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','Helo','Ara','Power','Bgm dj','Podu myre','Ayinu','Poore','Theep','Number','Vaa','Love','Ayya','Muthe','Bot shariyilla','Group','Song','Remove','Seen','Manda','Bye','Poli','Pever','Life','Like','Song','Uyir','Venda','Eda','Alok','Haa','Subscribe','Nanban','Hello','Group','Vannu','sex','Nice','Baby','Komban','Terror','Vijay','Pro','Guild','Ghost','King','Kooi','Tuttu','Azaru','Ramos','Escobar','Balu','mass','MPL','Tentacion','baby','Sanju','Hi','Mashmello','Devil Queen','Aromal','Love','nirthada','Neymar','umma','da','Heppy','Da','Carlos','King Carlos','Arakkal Carlos','Carlose','King Carlose','Arakkal Carlose','Music','Kurup','Friend','Rose','aara','Alone','Chunk','Thalapathy','Arun','ayilla','bie','Chiri','colony','MKFA MAYAVI','TVFWAK','enth','Morning','Mrng','entha','Entha','Legend','alive','entha','Asuravethalam','Fuck','Goal','Hambada','Kanja','Killedi','kuthirappavan','Prveen','thund','Mkfa biju','Frnd','mathi','Meeting','Happy Birthday','happy bday','mier','Chettayi','BOBY AMMU','AMMU BOBY','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Boss','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','sed','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Cr7 back','Portugal','tagall','ennitt','Boss','Haters','ayn','Kgf','😎','Akshay uyir','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','Scene','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','sneham','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','Die','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','pokam','Ram','Ashish','Thangamani','Unni','RVEK','achan','ishtamalla','Vishayam','Delete','delete','Mind','mind','Abhi','Ikka','Lalettan','Ramjith','ramjith','Chekuthankotta','Achu','achu','Alo','Athentha','Bei','Entha','Good','Mm','New','Avan','Maluz','RAYAPPAN','polikk','Food Kazhicho','Anjaly','Kattupoov','pattichu','aarumilla','Bgm','Aliya','njan vannu','kozhi','brand','Thudangam','Rashmika','Poli','Njan','Ooh','bot','Kukku','Adithyan','Anju','Adhi','Vishnu','Oi','Oii','918590109367','Kozhi','MKFA MAYAVI','AFA CYBER MAADAN','Alwin','919188290934','LFA','919645908747','917560831917','I LOVE YOU','Jack Sparrow','Praveen','CFA CHEKUTHAN']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
