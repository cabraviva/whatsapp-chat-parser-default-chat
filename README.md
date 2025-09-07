# WhatsApp Chat Parser Website

## Changes by CabraViva
This is just a slightly modified version of the awesome [Whatsapp Chat Parser by Pustur](https://github.com/Pustur/whatsapp-chat-parser-website), big thanks there!
My version allows you to upload a pre-exported chat zip-file before building, so that it always gets loaded automatically, no need to keep the zip.
Then, you can just upload the build folder to a static file server, and enjoy!

## Description
This website allows you to load a WhatsApp chat log and view its contents.
The app runs locally and no logs are sent or stored anywhere.

## How to run locally

1. Clone the git repo
2. Install [Node.js](https://nodejs.org/en/) if you don't have it already
3. Open a terminal in the root of the project and run `npm install` to install the dependencies (optionally with the `--production` flag to avoid installing development dependencies)
4. Add your exported chat as `chat.zip` in `./src/assets/`
5. Run `npm start` to start a development server (while in this mode you can change the code and see the results immediately)
6. Run `npm run build` to build the compiled bundle that you'll find in the `build/` folder
7. Make sure to deploy build folder as root in a nginx web server

Any local server will do to run the built files.  
It's also possible to download them directly from the [releases page](https://github.com/Pustur/whatsapp-chat-parser-website/releases).

## How to export WhatsApp chats

- [Android](https://faq.whatsapp.com/android/chats/how-to-save-your-chat-history)
- [iPhone](https://faq.whatsapp.com/iphone/chats/how-to-back-up-to-icloud/)

## License

[MIT](LICENSE)
