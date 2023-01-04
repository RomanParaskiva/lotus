This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Тестовое задание [Lotus](https://github.com/lotus-uems/Test_React_Trade)

Стэк: 
 - [Next.js](https://nextjs.org/) - конфигурация проекта, роутинг, сервер из коробки.
 - React - компоненты, хуки и прочие плюшки.
 - Redux + Saga - управление состоянием приложения и работа с побочными эффектами.
 - [Tailwindcss](https://tailwindcss.com) - CSS-фреймворк для удобной работы со стилями.

 ### Логика приложения

 Реализован главный экран с возможностью выбора одного из двух лотов. Это ссылки на просомтр страницы лота не как пользователь. У лотов разные даты начала, это позволяет продемонстировать, что таймер работает для каждого лота индивидуально. 
 Также на экране есть 10 ссылок на страницы 5 пользователей в разных лотах. 

 При переходе на страницу лота, получаем данные со стороны сервера используя SSR. На основании этих данных отображаются данные для определенного пользователя и лота. 

 Для получания пользователей и лотов используются моковые запросы к серверу Next.js. 


