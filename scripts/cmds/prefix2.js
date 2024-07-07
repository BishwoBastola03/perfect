 module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "Mr perfect",
   countDown: 5,
   role: 0,
   shortDescription: "prefix",
   longDescription: "prefix",
   category: "Prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Yo, my prefix is [  +  ]\n
`,
  attachment: await global.utils.getStreamFromURL("https://tinyurl.com/2dhnonos")
 });
 }
 }
}