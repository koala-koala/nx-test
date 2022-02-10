// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';
import NxWelcome from './nx-welcome';
import { Header } from '@nx-test/header'

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="nx-test" />
      <div />
    </>
  );
}

export default App;
