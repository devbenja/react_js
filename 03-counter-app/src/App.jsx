import './app.css';

const lastName = 'Carías';

const newMessage = {
  message: 'Print Object in React',
  author: 'Salvador',
};

const getResult = () => 'This is a Function';


export const App = ( { name } ) => {
  return (
    <div>
      <h3>{ `Hola ${ name } ${ lastName }` }</h3>
      <code>{ JSON.stringify( newMessage ) }</code>
      <p>{ getResult() }</p>
    </div>
  );
};


