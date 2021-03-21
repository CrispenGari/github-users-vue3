# github-users

This is a simple frontend application using `Vue3` that allows users to search for `GitHub Repositories` and get the repositores list.

## This Application is using:

- axios
- vuex
- github api
- vue3

## Demo

<img src="" alt="demo">

- [URL](https://github-users-8c9ad.web.app/)

## Hosting on Firebase

- To host this application make sure you have a firebase project and you enabled hosting
  - [Firebase Console](https://console.firebase.google.com/)
- run the following commands

1. Login to firebase on you console

```shell
$ firebase login
```

2. Make firebase app configurations for hosting by selecting features you used for the application:
   - hosting
   - firestore
   - etc

```shell
firebase init
What ...?(public) dist
```

- the public hosting directory for vue is `dist`

3. Run the build command

```
npm run build
```

4. finally

```
firebase deploy
```

## Credits:

- [Github](https://www.github.com/)
- [Stackoverflow](https//www.stackoverflow.com)

* [Firebase](https://console.firebase.google.com/)
