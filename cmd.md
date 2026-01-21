### Run the project

```
npm run dev
```

### Build the project

```
npm run build
```

### Run server from the out folder

```
npx serve@latest out
```

### Compress the project (for windows)

```
Compress-Archive -Path out\* -DestinationPath website_deploy.zip -Force
```

### Compress the project (for linux)

```
tar -czvf website_deploy.tar.gz out
```
