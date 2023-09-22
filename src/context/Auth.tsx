import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type Props = PropsWithChildren<{}>;
// type ContextType = {
//   user: FirebaseAuthTypes.User | null;
//   login: (email: string, password: string) => Promise<void>;
//   regester: (email: string, password: string) => Promise<void>;
//   logOut: () => Promise<void>;
//   setUser: Dispatch<SetStateAction<FirebaseAuthTypes.User | null>>;
// };
export const AuthContext = createContext<any>(null);


export const AuthProvider = ({children}: Props) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        regester: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        logOut: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
