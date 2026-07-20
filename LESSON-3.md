# LESSON-3 — <Задание 3. Advanced Redux и асинхронность. Загрузка и комментарии>

Ветка: lesson-3

## Запуск

npm ci && npm run dev
npm run build
npm run lint

## Чеклист

### Создание API-модуля через RTK Query (3 балла)

- [API корректно описан и экспортирует хук useGetTasksQuery ] — 1 балл
- [Загрузка задач происходит без ошибок ] — 1 балл
- [Используется transformResponse для получения массива ] — 1 балл

### Отображение задач в интерфейсе (3 балла)

- [Реализован хук useTasks, в котором данные загружаются через useGetTasksQuery ] — 1 балл
- [Задачи отображаются в интерфейсе ] — 1 балл
- [Код структурирован и соответствует FSD ] — 1 балл

### Локальное удаление задачи (3 балла)

- [Использован useEffect для загрузки данных в useState ] — 1 балл
- [Реализована функция removeTask ] — 1 балл
- [После удаления задача исчезает из UI ] — 1 балл

### Дополнительная задача: Общий baseApi + injectEndpoints для tasksApi (3 балла)

- [baseApi создан и экспортирован из shared/api/baseApi.ts (или shares/...), tagTypes включает Tasks ] — 1 балл.
- [tasksApi использует injectEndpoints от baseApi; getTasks корректно возвращает Task[] ] — 1 балл.
- [в store подключены baseApi.reducer и baseApi.middleware один раз ] — 1 балл.
