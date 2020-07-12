const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const prefix = config.prefix;

// MENSAJE NUEVO MIEMBRO
client.on("guildMemberAdd", (member) => {
  console.log(`Achanta! Un nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
  var canal = client.channels.get('731660011692097576'); 
  canal.send(`${member.user}, bienvenido al servidor.`);
  
});


//STATUS DEL BOT / ACTIVIDAD
client.on("ready", () => {
  console.log("Estoy listo!!");

  var name = "Prince of Persia"
  var type = 0;
  var url = "https://www.peralstudio.com";
  client.user.setPresence({
    status: 'dnd',
    activity: {
        name,
        type,
        url
    }
})
});


 // FOTO DANIE
 client.on("message", (message) => {
   if(message.content.startsWith(prefix + "danie")) {
     message.channel.send("https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/919033_634933919854268_393541899_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=_BfE3es4ETkAX_CTpec&_nc_ht=scontent-mad1-1.xx&oh=3286291f2c68f4d394c5efb28a9fcccc&oe=5F1A458E");
   }
   
 });


 // FOTO HUGO
 client.on("message", (message) => {
  if(message.content.startsWith(prefix + "hugo")) {
    message.channel.send("https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/23961_4315216091648_2050903303_n.jpg?_nc_cat=107&_nc_sid=cdbe9c&_nc_ohc=ZVCD6v3366gAX9JFiGd&_nc_ht=scontent-mad1-1.xx&oh=f0515fd0b813def74e1b000848600573&oe=5F2D36E0");
  }


// GIF ARDIENDO
  if (message.content.startsWith(prefix +"arder")) {
    message.channel.send("¡Alguien esta ardiendo! :hot_face: :fire::flame:\n" + "https://pa1.narvii.com/6175/9cc89d4baca1ce2779798b5930ab3ddf832a0eee_00.gif");
  }
  
});


// CALCULA EL PING DEL MENSAJE
client.on("message", message => {
  let ping = Math.floor(message.client.ping);
  if(message.content.startsWith(prefix + "ping")){
    message.channel.send("Cargando...").then(m => {
      m.edit({embed: {
        title: ":regional_indicator_p: :regional_indicator_i: :regional_indicator_n: :regional_indicator_g:",
        description: `  Tu ping es: **${Math.floor(
          m.createdTimestamp - Date.now()
        )}ms**`
        }});
    });}
});


// EMBED CON AVATAR DE USUARIO Y/O @MENCIONADO
client.on("message", message => {
  let prefix = config.prefix;

  if(message.content.startsWith(prefix + "avatar")) {
    let usuario = message.mentions.users.first() || message.author;
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Avatar del usuario: ${usuario.username}`)
      .setImage(usuario.displayAvatarURL({size : 1024}))
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
        .setColor(0x66b3ff)
        
       return message.channel.send({ embed });
    }else{
      const embed = new Discord.MessageEmbed()
      .setThumbnail(userm.displayAvatarURL({size : 1024}))
      .setAuthor(userm.username+'#'+userm.discriminator, userm.displayAvatarURL({size : 1024}))
      .addField('Jugando a', userm.presence.activities[0] != null ? userm.presence.activities[0].name : "Nada", true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x66b3ff)
      
     return message.channel.send({ embed });
    }
    
  }});


// COMANDO HELP CON TODOS LOS COMANDOS
  client.on("message", message => {
    if(message.content.startsWith(prefix + 'help')){
    
      message.channel.send('**COMANDOS DE PERBOT**\n```\n'+
                          '-> '+prefix+'ping             :: Comprueba la latencia del bot y de tus mensajes.\n'+
                          '-> '+prefix+'avatar <@user>   :: Muestra el avatar de un usuario.\n'+
                          '-> '+prefix+'usuario <@user>  :: Muestra información sobre un usuario mencioando.\n'+
                          '-> '+prefix+'danie            :: Foto Cararodapiés.\n'+
                          '-> '+prefix+'hugo             :: Foto.\n'+
                          '-> '+prefix+'arder            :: Ardiendo en pasión.\n'+
                          '-> '+prefix+'serverinfo       :: Información del servidor.\n```\n\n');
      
    }});


  // INFORMACION DEL SERVIDOR
    client.on("message", message => {
      if (message.content.startsWith(prefix + "serverinfo")) {
      
        var server = message.guild;
      
        const embed = new Discord.MessageEmbed()
      
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)      
        .addField('ID', server.id, true)      
        .addField('Region', server.region, true)      
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator, true)
        .addField('Miembros', server.memberCount, true)
        .addField("Roles", `El servidor tiene: ${server.roles.cache.size} roles`)
        .setColor(0x66b3ff)
      
       message.channel.send({ embed });
      
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
 
client.login(config.token);