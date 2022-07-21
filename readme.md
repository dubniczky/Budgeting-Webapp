# Web Budget App

An Angular web application with NodeJS REST API server for web-based budgeting

## Support ❤️

If you find the project useful, please consider supporting, or contributing.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/dubniczky)

## Requirements

- NodeJS `16+` (runtime environment)
- Yarn `1.2+` (package manager)
- Make `4+` (build system)
- Git `2.3+` (version control system)

## Quick Start

### Docker Compose

Buld and start both service containers at once with the following command:

```bash
make
```

In case make is not installed, you can manually start it:

```bash
docker-compose up --build
```

### Manual

Start server

```bash
make server
```

Start client

```bash
make client
```

For further details on all commands for the client and server service, take a look at the project specific makefiles:

- [/client/Makefile](/client/Makefile)
- [/server/Makefile](/server/Makefile)

## License

This project is under MIT license: [license](/LICENSE)
