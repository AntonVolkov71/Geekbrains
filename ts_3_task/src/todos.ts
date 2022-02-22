const url = 'https://jsonplaceholder.typicode.com/todos';

export interface ITodo {
  "userId": number;
  "id": number;
  "title": string;
  "completed": boolean
}

export function getTodosByCount(count: number) {
  return fetch(url)
    .then((response) => {
      return response.text()
    })
    .then<ITodo[]>((responseText) => {
      return JSON.parse(responseText)
    })
    .then((data) => {
      console.log('dadada')
      // таким образом здесь data уже имеет тип BookResponse
      if (!data.length) {
        throw Error(`Тудушек нету`)
      }

      // вернём первую книгу, так как одному ISBN соответствует одна книга
      return data.splice(0, count)
    })
}
