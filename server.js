const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fetch = require('node-fetch');
const moment = require('moment');
require('moment-duration-format');
const axios = require('axios');
const figlet = require('figlet');
const YouTube = require('youtube-node');


const prefix = config.prefix;
const youtubeKey = config.youtubeKey;
const giphyApi = config.giphyApi;
const versionbot = "PerBot v1.1 Peralstudio.com";




// MENSAJE NUEVO MIEMBRO
client.on("guildMemberAdd", miembro => {
  
  var canal = client.channels.cache.find(channel => channel.id === ("726778409455321140")); 

  const fotosBienvenida = [
    "https://static.wixstatic.com/media/e7332b_2b53e87788594ce4845eab5a4cb09631~mv2.gif",
    "https://i.pinimg.com/originals/c2/b7/2c/c2b72cfbbbc93891c51b5c615c10b356.gif",
    "https://puloduplo.com.br/wp-content/uploads/2020/05/games-riot-games-confetti6.gif"
  ]

  const saludos = [
    "¡Hola!",
    "Tu por aquí...",
    "Me alegro de verte",
    "Tss tss que viene"
  ]
    
  var saludo = saludos[Math.floor(saludos.length * Math.random())];
  var fotoBienvenida = fotosBienvenida[Math.floor(fotosBienvenida.length * Math.random())];

  const embed = new Discord.MessageEmbed()
      .setThumbnail(miembro.user.displayAvatarURL({size : 1024}))
      .setColor("RANDOM")
      .setImage(fotoBienvenida)
      .addField(`:wave: ${saludo} \n` , ` <@${miembro.id}> \n`) //` ${client.channels.cache.get('734258456034279456')} `)
      .addField('¡Bienvenido al servidor!', ` ${client.channels.cache.get('726778409455321140')} `)
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())
  
  canal.send(embed)
    

});


//STATUS DEL BOT / ACTIVIDAD
client.on("ready", () => {
  setInterval(() => {
  console.log("Estoy listo!!");
  
  const total = client.users.cache.size;   
  const membersOnline =  client.users.cache.filter(m=> m.presence.status === 'online').size
  const memberAusente = client.users.cache.filter(m=> m.presence.status === 'idle').size
  const memberDnd = client.users.cache.filter(m=> m.presence.status === 'dnd').size
  const memberOfline = client.users.cache.filter(m=> m.presence.status === 'offline').size
      
  var name =  `: (${total.toString()}   Total) + (` +
              `${membersOnline.toString()}  Online) + ` +
              `(${memberAusente.toString()}  Ausente) + `+
              `(${memberDnd.toString()} Ocupado) + `+
              `(${memberOfline.toString()}  Desconectado) `
  var type = "WATCHING";
  var url = "https://www.peralstudio.com";
  client.user.setPresence({
    status: 'online',
    activity: {
        name,
        type,
        url
    }
             
  })}, 3000 );
});

/*
//STATUS DEL BOT / ACTIVIDAD
client.on("ready", () => {
  console.log("Estoy listo!!");

  var name = "a tu madre"
  var type = "WATCHING";
  var url = "https://www.peralstudio.com";
  client.user.setPresence({
    status: 'online',
    activity: {
        name,
        type,
        url
    }
})
});
*/


// EMBED NSFW
client.on("message", message => {
  if(message.content.startsWith(prefix + "follar")) {
  if (message.channel.nsfw === true) {
  let CumUser = message.guild.member(message.mentions.users.first())
    if(!CumUser) return message.channel.send("Tienes que mencionar a alguien!");

    const  gif = [
      "https://www.elergonomista.com/wp-content/uploads/2019/05/h13.gif",
      "https://img-9.poringa.net/poringa/img/3/8/8/F/3/B/di3g0xxx/A6E.gif",
      "https://img.culturacolectiva.com/content/2015/08/tumblr-gif-phazed.gif",
      "https://i2.wp.com/pornopoke.com/wp-content/uploads/2016/08/Ash-junto-a-Misty-teniendo-sexo-anal-2.gif",
      "https://img-9.poringa.net/poringa/img/9/8/E/4/6/E/di3g0xxx/B25.gif",
      "https://img-9.poringa.net/poringa/img/0/3/A/4/8/5/di3g0xxx/8D3.gif",
      "https://i.imgbox.com/8StvSTYe.gif",
      "https://forosdz.com/imagenes/13894215-gif.61346/",
      "https://www.gifspx.com/gifs-animados-x/gspx_gifs-3d-hentai-abril-2015-01.gif",
      "https://www.gifspx.com/gifs-animados-x/gspx_llamadas-en-el-momento-inesperado-manga.gif",
      "https://www.webporno.xxx/wp-content/uploads/2018/05/buena-follada-por-el-culo.gif",
      "https://s3-eu-west-1.amazonaws.com/grazia-cdn/wp-content/uploads/2015/02/11204803/47.gif",
      "https://lossimpsonxxx.com/wp-content/uploads/2015/04/marge-y-nelson-follando-imagen-foto-dibujo.gif",
      "https://img-9.poringa.net/poringa/img/3/D/1/D/9/D/di3g0xxx/337.gif",
      "https://cl.phncdn.com/gif/12066771.gif",
      "https://thumb-p1.xhcdn.com/a/OjaGok6Mc20it8dPWjknww/000/076/190/201_450.gif",
      "https://multporn.net/sites/default/files/gif/league_of_legends/league-of-legends-fendomy-ahri-lol-porn-2557948.gif",
      "https://www.lolhentai.net/upload/2016/03/12/20160312014451-e4eec751.gif",
      "https://i7a8a9b6.ssl.hwcdn.net/toons-empire.com/upload/mediums/f9/c/e/f9ce2ef34f63622e3b7f6b59df00f6c4.gif",
      "https://thumb-p7.xhcdn.com/a/CV3ulUOJ-7ljUDibNDqKgA/000/076/190/167_1000.gif",
      "https://img-9.poringa.net/poringa/img/8/4/7/F/5/E/LaurenBig/962.gif"
    ]
    
    var gifs = gif[Math.floor(gif.length * Math.random())];
    var kissEmbed = new Discord.MessageEmbed()

    .setDescription(`<@${message.author.id}> se folla a <@${message.mentions.users.first().id}>`)
    .setImage(gifs)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(versionbot, client.user.displayAvatarURL())

    message.channel.send(kissEmbed)
  }else{
   message.channel.send("Este no es un canal NSFW")}
  }
});


 // EMBED FOTO DANIE
client.on("message", message => {
  if(message.content === (prefix + "danie")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setImage('https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/919033_634933919854268_393541899_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=_BfE3es4ETkAX_CTpec&_nc_ht=scontent-mad1-1.xx&oh=3286291f2c68f4d394c5efb28a9fcccc&oe=5F1A458E')
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())
      
    return message.channel.send(embed)
    }
  });


 // EMBED FOTO HUGO
client.on("message", message => {
  if(message.content === (prefix + "hugo")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setImage('https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/23961_4315216091648_2050903303_n.jpg?_nc_cat=107&_nc_sid=cdbe9c&_nc_ohc=ZVCD6v3366gAX9JFiGd&_nc_ht=scontent-mad1-1.xx&oh=f0515fd0b813def74e1b000848600573&oe=5F2D36E0')
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())
      
    return message.channel.send(embed)
    }
  });


// EMBED FOTO ARDIENDO
client.on("message", message => {
  if(message.content === (prefix + "arder")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("¡Alguien esta ardiendo! :hot_face: :fire::flame:")
      .setColor("RANDOM")
      .setImage('https://pa1.narvii.com/6175/9cc89d4baca1ce2779798b5930ab3ddf832a0eee_00.gif')
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())
      
    return message.channel.send(embed)
    }
  });


// CALCULA EL PING DEL MENSAJE
client.on("message", message => {
  let ping = Math.floor(message.client.ping);
  if(message.content === (prefix + "ping")){
    message.channel.send("Cargando...").then(m => {
      m.edit({embed: {
        title: ":regional_indicator_p: :regional_indicator_i: :regional_indicator_n: :regional_indicator_g:",
        description: `  Tu ping es: **${Math.floor(
          m.createdTimestamp - Date.now()
        )}ms**`
        }});
    });}
});


//TEXTO EN ASCII
client.on('message', message => {
  if (!message.content.startsWith(prefix + 'asci') || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    message.delete();
    if (command === 'asci'){ 
    if (!args[0]) return message.reply("¿Y el Texto?")
    if (args.join(" ") > 15) message.reply("El texto no puede contener más de 15 Caracteres")
    figlet(args.join(" "), (err, data) => message.reply( "dice: " + "```" + data + "```"))
   

}});


// EMBED CON AVATAR DE USUARIO Y/O @MENCIONADO
client.on("message", message => {
  let prefix = config.prefix;

  if(message.content.startsWith (prefix + "avatar")) {
    let usuario = message.mentions.users.first() || message.author;
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(usuario.username+'#'+usuario.discriminator, usuario.displayAvatarURL({size : 1024}))
      .setImage(usuario.displayAvatarURL({size : 1024}))
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())
    return message.channel.send(embed)
  }
});


// INFORMACION DE USUARIO Y/O @MENCIONADO
client.on("message", message => {
  if(message.content.startsWith(prefix + "usuario")){
    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
      
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.displayAvatarURL({size : 1024}))
        .setAuthor(user.username+'#'+user.discriminator, user.displayAvatarURL({size : 1024}))
        .addField('Jugando a', user.presence.activities[0] != null ? user.presence.activities[0].name : "Nada", true)
        .addField('Estado', user.presence.status, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(versionbot, client.user.displayAvatarURL())
        
       return message.channel.send({ embed });
    }else{
      const embed = new Discord.MessageEmbed()
      .setThumbnail(userm.displayAvatarURL({size : 1024}))
      .setAuthor(userm.username+'#'+userm.discriminator, userm.displayAvatarURL({size : 1024}))
      .addField('Jugando a', userm.presence.activities[0] != null ? userm.presence.activities[0].name : "Nada", true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())

     return message.channel.send({ embed });
    }
    
  }});


// DATOS SOBRE EL CORONAVIRUS
client.on('message', message => {
  if (!message.content.startsWith(prefix + 'corona') || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

  if (command === 'corona'){    
  
    fetch(`https://covid19.mathdro.id/api/countries/${args}`)
    .then(response => response.json())
    .then(data => {
      let confirmed = data.confirmed.value.toLocaleString()
      let recovered = data.recovered.value.toLocaleString()
      let deaths = data.deaths.value.toLocaleString()
      const d = data.lastUpdate
      const date = moment(d).format("L");

      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+'#'+message.author.discriminator, message.author.displayAvatarURL({size : 1024}))
      .setColor("RANDOM")
      .addField(`País: ${args}`, `Confirmados: **${confirmed}** \nRecuperados: **${recovered}** \nFallecidos: **${deaths}**\n`)
      .setFooter(`Actualizado: ${date}`)
      
      message.channel.send(embed)
    }).catch(err => {
      message.reply(`Escribe un País valido.`)
  })

}});


  // INFORMACION DEL SERVIDOR
client.on("message", message => {
  if (message.content === (prefix + "serverinfo")) {
  
    var server = message.guild;
    var icon = server.iconURL()
    const total = client.users.cache.size;   
    const membersOnline =  client.users.cache.filter(m=> m.presence.status === 'online').size
    const memberAusente = client.users.cache.filter(m=> m.presence.status === 'idle').size
    const memberDnd = client.users.cache.filter(m=> m.presence.status === 'dnd').size
    const memberOfline = client.users.cache.filter(m=> m.presence.status === 'offline').size
  
    const embed = new Discord.MessageEmbed()
  
    .setThumbnail(icon)
    .setAuthor(server.name, icon) 
    .addField('ID:', server.id, true)
    .addField('Region:', server.region, true)
    .addField('Creado el:', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor:', `<@${server.owner.user.id}>`, true)
    .addField("Roles:", `El servidor tiene: ${server.roles.cache.size} roles`)
    .addField('Miembros:', `Total ${total.toString()} \n` + `Online ${membersOnline.toString()} \n` + `Ausente ${memberAusente.toString()} \n` + `Ocupado ${memberDnd.toString()} \n` + `Desconectado ${memberOfline.toString()} \n` , true)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(versionbot, client.user.displayAvatarURL())
  
   message.channel.send( embed );
  
  }});


//EMBED CONSULTA API TIEMPO
const exampleEmbed = (
  temp,
  maxTemp,
  minTemp,
  pressure,
  humidity,
  wind,
  cloudness,
  icon,
  author,
  profile,
  cityName,
  country
) =>
  new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Hola, ${author}`, profile)
    .setTitle(`Hay ${temp}\u00B0C en ${cityName}, ${country}`)
    .addField(`Máxima:`, `${maxTemp}\u00B0C`, true)
    .addField(`Míninima:`, `${minTemp}\u00B0C`, true)
    .addField(`Humedad:`, `${humidity} %`, true)
    .addField(`Viento:`, `${wind} m/s`, true)
    .addField(`Presión:`, `${pressure} hpa`, true)
    .addField(`Nubes:`, `${cloudness}`, true)
    .setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
    .setTimestamp()
    .setFooter(versionbot, client.user.displayAvatarURL())

    client.on('message', message => {
      if (!message.content.startsWith(prefix + 'tiempo') || message.author.bot) return;
      const args = message.content.slice(prefix.length).split(' ');
      const command = args.shift().toLowerCase();

      if (command === 'tiempo' || 'weather') {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=40efccd434eefd0344923485b60fbda7`
            )
            .then(response => {
                let apiData = response;
                let currentTemp = Math.ceil(apiData.data.main.temp)
                let maxTemp = Math.ceil(apiData.data.main.temp_max);
                let minTemp = Math.ceil(apiData.data.main.temp_min);
                let humidity = apiData.data.main.humidity;
                let wind = apiData.data.wind.speed;
                let author = message.author.username
                let profile = message.author.displayAvatarURL()
                let icon = apiData.data.weather[0].icon
                let cityName = args
                let country = apiData.data.sys.country
                let pressure = apiData.data.main.pressure;
                let cloudness = apiData.data.weather[0].description;
                message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
            }).catch(err => {
                message.reply(`Escribe una Ciudad valida`)
            })
    }
}
)


// ESTADO DEL BOT
client.on("message", message => {
  if(message.content === (prefix + "botinfo")) {
const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
var server = message.guild;
const embed = new Discord.MessageEmbed()
.setColor('RANDOM') 
.setAuthor(client.user.username, client.user.displayAvatarURL())
.setDescription(`**Información del cliente**`)
.addField(`Creador`, `💻<@${server.owner.user.id}>`, true)
.addField(`Version`, `v12`, true)
.addField(`Libreria`, `Discord ^12.1.1 (Js)`, true)
.addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`Activo`, `${actividad}`, true)
.addField(`Servidores`, `${client.guilds.cache.size.toLocaleString()}`, true)
.addField(`Usuarios`, `${client.users.cache.size.toLocaleString()}`, true)
.addField(`Canales`, `${client.channels.cache.size.toLocaleString()}`, true)
.setTimestamp()
.setFooter(versionbot, client.user.displayAvatarURL())

message.channel.send(embed);

}});


// GENERAR GIF RANDOM
client.on("message", message => {
  if (message.content === (prefix + 'gif')) {

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyApi}`)
    .then(response => response.json())
    .then(data => {
      
      let urlGif = data.data.images.original.url
      
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({size : 1024}))
      .setImage(urlGif)
      .setTimestamp()
      .setFooter(versionbot, client.user.displayAvatarURL())
      
      message.channel.send(embed)
    }).catch(err => {
      message.reply(`Error`) })
  }});


// BOLA 8
client.on('message', message => {
  if (!message.content.startsWith(prefix + 'bola8') || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

if (command === "bola8") { //command Definido
	var rpts = ["Seguro...", "No :no_entry:", "Tal vez", "No sé", "Sí ¡Claro!", "Telomiro", "Si <3", "No >:("]; // Las Respuestas
    console.log(args)
    let pregunt = args.join(' '); //Si falta la pregunta
    console.log(pregunt)
    if(!pregunt) return message.channel.send(':x: | Falta la pregunta.');
	
	const embed = new Discord.MessageEmbed() //Creamos el embed
    .setTitle(':8ball: :8ball: Bola 8 :8ball: :8ball: ')
    .setAuthor(message.author.username, message.author.displayAvatarURL({size : 1024}))
		.setThumbnail(message.author.displayAvatarURL)
		.addField('Tu pregunta es:', args, true)
    .addField('La respuesta es:', rpts[Math.floor(Math.random() * rpts.length)], true)
    .setTimestamp()
    .setFooter(versionbot, client.user.displayAvatarURL())
	message.channel.send(embed)
}
});


// BUSCADOR DE VIDEOS YOUTUBE
client.on("message", message => {
  if (!message.content.startsWith(prefix + 'y') || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(' ');
  const commandweather = args.shift().toLowerCase();
  
  if (commandweather === 'y'){
  
    console.log(args)
    let youTube = new YouTube();

        youTube.setKey(youtubeKey); // API-KEY

        let nombreyt = args.join(" ") //Definimos: nombreyt
        if(!nombreyt) return  message.channel.send(':face_with_monocle: Pon algo para buscar'); //Si no tiene un nombre de vídeo en yt, retornar.

        message.channel.send(':arrows_counterclockwise: Buscando..!') 
        .then(m => {
            youTube.search(args.join(' '), 2, function(err, result){
                if(err){
                    return console.log(err); 

                }
                if(result.items[0]["id"].videoId == undefined){
                    return message.channel.send('¡No se han encontrado resultados!'); //Si el vídeo no existe, retornar

                } else{
                    let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
                    m.edit(link); //Editar el mensaje ''Búscando'' por el link del vídeo

              }
  })
})
}});


//BORRAR MENSAJES
client.on('message', message => {
  let command = prefix + 'borrar';
if(message.content.includes(command)) { 
  if(message.member.roles.cache.find(rol => rol.id === "726768057149816932")){

      //check the end of the message for the amount
   let args = parseInt(message.content.slice(command.length));

   // Check if Delete Count is bigger than discord can handle
   if (args > 100) {
     // Delete only 100 messages
     args = 100
     // Notify user about this
     message.channel.send('Solo puedes borrar 100 mensajes. Borrando 100 mensajes').then(e => setTimeout(() => e.delete(), 2000))
   }
   // Delete only one message if not specified how many
   if (Number.isNaN(args)) args = 1
   // console.log([deleteCount, typeof (deleteCount)])
   try {
     // Delete user message
      message.delete()
     // Fetch messages
     const fetched = message.channel.messages.fetch({ args })
     
     // Delete messages
       message.channel.bulkDelete(args)
   } catch (error) {
     // Handle error
     message.reply(`No se ha podido borrar por: ${ error }`)
     // Delete error message
       .then(el => setTimeout(() => el.delete(), 5000))
     // Exit function
     return 0
   }
   // Notify if success
   message.channel.send(`Completado. Se han borrado ${ args } ${ args === 1 ? 'mensaje' : 'mensaje' }.`).then(el => setTimeout(() => el.delete(), 2000))
   return 0
   }
   
    else {
      message.channel.send("Achanta tonto!! No tienes premisos");
      
    }
    
  }});


  //BUSCAMINAS
  client.on("message", message => {
    if(message.content === (prefix + 'minas')){
  async function mines() {
    const choices = [
      "||:one:||",
      ...Array(5).fill("||:two:||"),
      ...Array(2).fill("||:bomb:||"),
      ...Array(5).fill("||:zero:||")
    ];
    const generateChoice = () =>
      choices[Math.floor(Math.random() * choices.length)];
  
    const generateGrid = (width, height) => {
      return Array(height)
        .fill(Array(width))
        .map(arr => arr.fill([]).map(generateChoice));
    };
    const generated = generateGrid(10, 10);
    let whatToSend = generated.map(arr => arr.join(" ")).join("\n");
    return message.channel.send(whatToSend);
  }
  mines();
}});


//CHISTES ALEATORIOS
client.on("message", message => {
  if(message.content === (prefix + 'chiste')){
    fetch(`https://risapi.glitch.me`)
    .then(response => response.json())
    .then(body => {
      
      message.channel.send(body.chiste)
    }).catch(err => {
      message.reply(`Error`) })
  }});
  

// TEXTO GEOMETRY DASH
client.on('message', message => {
  if (!message.content.startsWith(prefix + 'geometry') || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    console.log(args)

if (command === "geometry") { //command Definido
	
    let pregunt = args.join(' '); //Si falta la pregunta
    
    if(!pregunt) return message.channel.send(':x: | Escribe el texto.');
  
    let texto = args.join('%20'); // Reemplazar los espacios por %20 para que sea compatible con la "api"
  
    let attachment = new Discord.MessageAttachment(`https://gdcolon.com/tools/gdlogo/img/${texto}`, 'logo.png') //Creando la imagen
  
  message.channel.send(attachment)

}
});


//PIEDRA PAPEL TIJERAS
client.on("message", message => {
  if (!message.content.startsWith(prefix + 'ppt') || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    console.log(args)

    if (command === 'ppt') {
        const acceptedReplies = ['piedra', 'papel', 'tijeras'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        console.log(acceptedReplies)
        const result = acceptedReplies[random];
        console.log(result)
        

        const choice = args[0];
        if (!choice) return message.channel.send(`Como jugar: \`${prefix}ppt <piedra|papel|tijeras>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Solo se aceptan estas respuestas: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) 
        return message.channel.send(`Tu elección: ${args} `+ `-- Bot elección: ${result}`)+
        message.reply(":man_facepalming: Empate! Hemos elegido lo mismo.");
        
        switch (choice) {
            case 'piedra': {
                if (result === 'papel') 
                return message.channel.send('Resultado del Bot: '+ result)+
                message.reply(':x: Pierdes!');
                
                else return message.channel.send('Resultado del Bot: '+ result)+
                message.reply(':trophy: Tu ganas!');
                
            }
            case 'papel': {
                if (result === 'tijeras')  
                return message.channel.send('Resultado del Bot: '+ result)+
                message.reply(':x: Pierdes!');

                else return message.channel.send('Resultado del Bot: '+ result)+
                message.reply(':trophy: Tu ganas!');
                       
            }
            case 'tijeras': {
                if (result === 'piedra') 
                return message.channel.send('Resultado del Bot: '+ result)+
                message.reply(':x: Pierdes!');
                
                else return message.channel.send('Resultado del Bot: '+ result)+
                message.reply(':trophy: Tu ganas!');
                
                
            }
            default: {
                return message.channel.send(`Solo se aceptan estas respuestas: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }
})


// COMANDO HELP CON TODOS LOS COMANDOS
client.on("message", message => {
  if(message.content.startsWith(prefix + 'help')){
  
    const embed = new Discord.MessageEmbed()
    .setTitle("Página de Github :link:")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .addField(prefix + 'ping', 'Compueba la latencia del BOT con la API de discord', true)
    .addField(prefix + 'avatar <@user>', 'Muestra el avatar de un usuario y/o mencioando.', true)
    .addField(prefix + 'usuario <@user>', 'Muestra información sobre un usuario y/o mencioando.', true)
    .addField(prefix + 'borrar[nº mensajes]', 'Borrar mensajes + [Cantidad].', true)
    .addField(prefix + 'y+[loquequierasbuscar]', 'Buscar en Youtube.', true)
    .addField(prefix + 'gif', 'Generar gif random.', true)
    .addField(prefix + 'follar <@user>', 'Follate a alguien XXX.', true)
    .addField(prefix + 'tiempo <ciudad>', 'Información del tiempo.', true)
    .addField(prefix + 'geometry <texto>', 'Texto tipo Geometry dash.', true)
    .addField(prefix + 'ppt', 'Piedra Papel Tijeras.', true)
    .addField(prefix + 'bola8 <pregunta>', 'Pregunta a la Bola8.', true)
    .addField(prefix + 'minas', 'Buscaminas.', true)
    .addField(prefix + 'asci <texto>', 'Texto en ASCII.', true)
    .addField(prefix + 'danie', 'Foto Cararodapiés.', true)
    .addField(prefix + 'hugo', 'Foto.', true)
    .addField(prefix + 'arder', 'Ardiendo en pasión.', true)
    .addField(prefix + 'serverinfo', 'Información del servidor.', true)
    .addField(prefix + 'corona <país>', 'Información sobre el Coronavirus.', true)
    .addField(prefix + 'botinfo', 'Información del BOT.', true)
    .setURL("https://github.com/Peralstudio")
    .setTimestamp()
    .setFooter(versionbot, client.user.displayAvatarURL())
    .setColor("RANDOM")
    
message.channel.send('**COMANDOS DE PERBOT**', embed);
  }});

  
/* Para que funcione correctamente se debe instalar el npm llamado weez
En consola poner:
   Glitch: pnpm i weez
   VSC: npm i weez
También necesitaremos una clave la cual se puede obtener en:
https://weez.pw/


const Weez = require("weez");
const weez = new Weez.WeezAPI("CLAVE-WEEZ");

client.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.get("ID-CANAL")
    let attach = new Weez.Bienvenida()
        .avatar(member.user.displayAvatarURL)
        .fondo("URL-IMAGEN")
        .textoTitulo(`Bienvenido ${member.user.username}`)
        .textoDesc("Ejemplo PortalMyBot")
        .textoColor('ffffff')
        .acceso(weez)
    let ImgBienvenida = await Weez.bienvenidaRender(attach)
    await channel.send({ files: [ImgBienvenida] })
})

client.on('guildMemberAdd', (member) => { // guildMemberAdd es cuando se une el miembro
     
  const msgChannel = new Discord.RichEmbed() // EMBED
     .setThumbnail(member.user.displayAvatarURL)
  .setAuthor(" Bienvenido "+member.user.username,"https://cdn.discordapp.com/emojis/680807826981257218.gif?v=1")
     .setDescription("**¡Bienvenido a " +member.guild.name+ " !**\nRecuerda visitar nuestro canal <#686978424665014480> para no tener problemas ")
  .setFooter('Nuestra cantidad de miembros actual es de '+member.guild.memberCount)
     .setColor("RANDOM") 
     const channel = client.channels.get('595041664213712916/726778409455321140'); //ID DE CANAL
   channel.send(msgChannel); // EMBED A ENVIAR

});*/
 
client.login(config.token, config.youtubeKey, config.giphyApi);