import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  // Informa qual o tipo do retorno
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {/* o ? so realiza o map caso o valor de data seja definido */}
      {data?.lessons.map(lesson => {
        return <li>{lesson.title}</li>
      })}
    </ul>
  )
}
export default App
