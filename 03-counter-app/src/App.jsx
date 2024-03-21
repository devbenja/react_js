import './app.css';

const lastName = 'Carías';

const newMessage = {
  message: 'Print Object in React',
  author: 'Salvador',
};

const getResult = () => 'This is a Function';


export const App = ( { name, profession } ) => {
  return (
    <div>
      <h3>{ `I'm ${ name } ${ lastName }` }</h3>
      <p>{ profession }</p>
      <code>{ JSON.stringify( newMessage ) }</code>
      <p>{ getResult() }</p>
    </div>
  );
};


