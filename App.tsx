import RootNavigation from './src/navigation/rootNavigation';
import { AuthProvider } from './src/context/Auth';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <RootNavigation/>
    </AuthProvider>
  );
}
export default App;
