// The main function component (root component) is designated with export default

export default function App() {

  // Function component returns JSX
  // JSX expression must be nested within parenthesis
  // if it stretches across multiple lines
  
    return (
    <div>

      <h1>I love JavaScript !</h1>
      <h2>I love React !</h2>     
      <p> I love learning! </p>
      <h1> Thank You! </h1>

      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>



    </div>

 
    );
  }
  